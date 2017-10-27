export default {
  data () {
    return {}
  },
  mixins: [],
  created () {
    this.tick ()
  },
  methods: {
    tick () {
      requestAnimationFrame (this.tick);

      this.box.rotation.x += 0.01;
      this.box.rotation.y += 0.01;

      this.renderer.render (this.scene, this.camera)
    }
  }
}
