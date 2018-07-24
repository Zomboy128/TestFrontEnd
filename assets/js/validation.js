$('#formid').bootstrapValidator({
 
     message: 'Este valor no es valido',
 
     feedbackIcons: {
 
         valid: 'glyphicon glyphicon-ok',
 
         invalid: 'glyphicon glyphicon-remove',
 
         validating: 'glyphicon glyphicon-refresh'
 
     },
 
     fields: {
 
         email: {
 
             validators: {
 
                 notEmpty: {
 
                     message: 'El Email es requerido'
 
                 },
                    emailAddress: {
 
                     message: 'El correo electronico no es valido'
 
                 }
 
             }
 
         },
 
     }
 
});