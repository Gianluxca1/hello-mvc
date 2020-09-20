const  mangosta  =  require ( 'mangosta' ) ;

const  UserSchema  =  nueva  mangosta . Esquema ( {
  id : Número ,
  nombre : String ,
  correo : String ,
  cumpleaños : fecha
} ) ;

const  Usuario  =  mangosta . modelo ( 'Usuario' ,  UserSchema ) ;

módulo . exportaciones  =  Usuario ;