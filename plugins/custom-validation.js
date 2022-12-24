import Vue from 'vue'
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate'
import {
  required,
  min,
  email,
  confirmed,
  image,
  regex,
  numeric,
  url,
} from 'vee-validate/dist/rules'
//? Another Solution For Vee-validate import it like that
//? .umd.js --- add that after rules
extend('required', {
  ...required,
  message: 'هذا الحقل مطلوب',
})
extend('min', {
  ...min,
  params: ['length'],
  message: 'يجب الا يكون طول الحقل اقل من {length}',
})
extend('email', {
  ...email,
  message: 'يرجى كاتبة بريد الكتروني صحيح',
})
extend('numeric', {
  ...numeric,
  message: 'يرجى كاتبة ارقام فقط في هذا الحقل',
})
extend('confirmed', {
  ...confirmed,
  message: 'تأكيد كلمة المرور غير مطابقة لكلمة المرور الاساسية',
})
extend('image', {
  ...image,
  message: 'يجب رفع ملف واحد علي الاقل',
})
extend('regex', {
  ...regex,
  message:
    'The password must contain at least one uppercase, one lowercase letter and at least one symbol.',
})

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
