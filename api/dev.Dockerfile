# syntax=docker/dockerfile:experimental

FROM python:3.6

RUN apt-get -y update && \
    apt-get install -y --fix-missing \
    build-essential \
    cmake \
    gfortran \
    git \
    wget \
    curl \
    graphicsmagick \
    libgraphicsmagick1-dev \
    libatlas-base-dev \
    libavcodec-dev \
    libavformat-dev \
    libboost-all-dev \
    libgtk2.0-dev \
    libjpeg-dev \
    liblapack-dev \
    libswscale-dev \
    pkg-config \
    python3-dev \
    python3-numpy \
    software-properties-common \
    zip \
    && apt-get clean && rm -rf /tmp/* /var/tmp/*


# Install DLIB
RUN cd ~ && \
    mkdir -p dlib && \
    git clone -b 'v19.7' --single-branch https://github.com/davisking/dlib.git dlib/ && \
    cd  dlib/ && \
    python3 setup.py install --yes USE_AVX_INSTRUCTIONS


# Default export for gunicorn
EXPOSE 8888

# Install gunicorn, flask, eventlet, to put in a requirements.txt
RUN --mount=type=cache,target=/root/.cache/pip  pip install "gunicorn==20.0.4" "flask==1.1.1" "eventlet==0.25.1" "werkzeug==0.16.1"

# Custom gunicorn configuration

RUN useradd --create-home flask

# Non-root user home as working directory
WORKDIR /home/flask

# Copy requirements.txt
COPY requirements.txt .

# Install requirements.txt
RUN --mount=type=cache,target=/root/.cache/pip  pip install -r requirements.txt

RUN --mount=type=cache,target=/root/.cache/pip  pip install boto3
# Copy source files
COPY . .

COPY gunicorn.conf.dev.py /etc/gunicorn/gunicorn.conf.py
USER flask
# Start the web service

ENTRYPOINT ["gunicorn", "-c", "/etc/gunicorn/gunicorn.conf.py", "wsgi:app"]
