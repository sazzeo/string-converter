
var main = {

    
    init : function() {

        var _this = this;
        $('#btn-bean').on('click' , function() {
            
            _this.makeBean();

        })
        

    },
    
    makeBean : function() {
        
        var _this = this;
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
        
        var output =_this.makeSen(input);
        $('#output-text').val(output);
        
    }

    , makeSen : function(input) {

        var res = "";
        for(var i=0; i<input.length ;i++) {

            res+=input[i] + '\n';

        }
        
        return res;


    }





}

main.init();