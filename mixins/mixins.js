import { mapGetters } from 'vuex'

export default {
  methods: {
    error_handler(payload) {
      this.$store.dispatch('localStorage/response_handler', payload)
    },
  },
  computed: {
    ...mapGetters({
      notify: ['localStorage/get_errors'],
    }),
  },
}
