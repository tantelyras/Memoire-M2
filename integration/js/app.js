new Vue({
  el: "#app",
  data: {
    FILE_URL: FILE_URL,
    image: "",
    faces: [],
    person: {
      face: "",
      name: ""
    },
    mode: ""
  },
  watch: {
    mode: function (value) {
      switch (value) {
        case "add":
          break;
        case "edit":
          break;
      }
    }
  },
  methods: {
    save() {
      post("save", this.person, response => {
        console.log(response);
        this.mode = "";
      });
    },
    add() {
      post("add", this.person, response => {
        console.log(response);
        this.mode = "";
      });
    },
    upload() {
      const upload = document.getElementById("file");
      var fmdt = new FormData();
      fmdt.append("file", upload.files[0]);
      post_file("faces", fmdt, response => {
        this.faces = response.data;
      });
    },
    search(face) {
      post("search", { face }, response => {
        this.faces = [];
        console.log(response.data);

        if (response.data._id) {
          this.person = response.data;
          this.mode = "edit";
          this.person.new_face = face;
        } else {
          this.mode = "add";
          this.person.face = face;
        }
      });
    }
  },
  mounted: function () { }
});
