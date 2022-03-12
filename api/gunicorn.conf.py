# -*- coding: utf-8 -*-
# Single worker
workers = 1

# Bind to "0.0.0.0" for external access
bind = "0.0.0.0:9876"

# Eventlet
worker_class = "eventlet"

# Log to stdout
accesslog = "-"

# 30s of timeout
timeout = 30
