
var main = {

    
    init : function() {

        var _this = this;
        $('#btn-bean').on('click' , function() {
            
            _this.makeBean();

        })

        $('#btn-entity').on('click' , function() {

            _this.makeToEntity();

        })
                $('#btn-set').on('click' , function() {

            _this.makeSetQuery();

        })
        

    },
    
    makeBean : function() {
        
        var input = $('#input-text').val().trim().toLowerCase().split('\n');
        
        for(var i=0 ; i<input.length;i++) {
            
            var str = input[i];
            while(true) {
                
                var num = str.indexOf('_')+1;
                
                if (num==0) break;
                
                var alp = str[num];
                str = str.replaceAll('_'+alp , alp.toUpperCase()); 

            }
            input[i]= "private String " + str +";";

        }

        
        var res = "";
        for(var i=0; i<input.length ;i++) {

            res+=input[i] + '\n';

        }
        
        
        var output =res;
        $('#output-text').val(output);
        
    }

    , makeToEntity : function() {

        var input = $('#input-text').val().replaceAll('private String' , '').replaceAll(';','').split('\n');
        for(var i=0; i<input.length ; i++) {
            
            input[i]=input[i].trim();


        }


        var res = "public 엔티티명 toEntity() {\n" 
            + "     return 엔티티명.builder()\n";
        for(var i=0; i<input.length ;i++) {
        
            
            res+="."+input[i] + "(" +input[i]+")\n"

        }
        res=res+".build();\n"
        +"}"

        var output =res;
        
        $('#output-text').val(output);
        

    }

    , makeSetQuery : function() {
        
        var input = $('#input-text').val().trim().split('\n');
        var camel = [];
        for(var i=0 ; i<input.length;i++) {
            
            var str = input[i].toLowerCase();
            while(true) {
                
                var num = str.indexOf('_')+1;
                
                if (num==0) break;
                
                var alp = str[num];
                str = str.replaceAll('_'+alp , alp.toUpperCase()); 

            }
            camel[i]= str;
        

        }

        
        var res = "<set>\n";
        for(var i=0; i<input.length ;i++) {

            res+='<if test="' + camel[i] + ' != null">\n'
            + ', ' + input[i] + " = #{" + camel[i] + "}\n"
            +'</if>\n'
        }
        
        res+="</set>"
        
        var output =res;
        $('#output-text').val(output);
        


    }





}

main.init();