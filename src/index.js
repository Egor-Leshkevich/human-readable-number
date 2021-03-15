module.exports = function toReadable (number) {
  var to_nine = ['one', 'two', 'three', 'four','five','six','seven','eight','nine'];
  var desyatki = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  var desyatki_teen= ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  var hundred=' hundred';
  var string=number.toString();
  var out_string='';
  if(string.length==3) {
    switch(string[0]) {
      case '1':
        out_string+=to_nine[0]+hundred;
        break;
      case '2':
        out_string+=to_nine[1]+hundred;
        break;
      case '3':
        out_string+=to_nine[2]+hundred;
        break;
      case '4':
        out_string+=to_nine[3]+hundred;
        break;
      case '5':
        out_string+=to_nine[4]+hundred;
        break;
      case '6':
        out_string+=to_nine[5]+hundred;
        break;
      case '7':
        out_string+=to_nine[6]+hundred;
        break;
      case '8':
        out_string+=to_nine[7]+hundred;
        break;
      case '9':
        out_string+=to_nine[8]+hundred;
        break;
    }
    if(string[1]=='0' && string[2]=='0') return out_string;
    if(string[1]=='0') {
      switch(string[2]) {
      case '1':
        out_string+=' ' + to_nine[0];
        break;
      case '2':
        out_string+=' ' + to_nine[1];
        break;
      case '3':
        out_string+=' ' + to_nine[2];
        break;
      case '4':
        out_string+=' ' + to_nine[3];
        break;
      case '5':
        out_string+=' ' + to_nine[4];
        break;
      case '6':
        out_string+=' ' + to_nine[5];
        break;
      case '7':
        out_string+=' ' + to_nine[6];
        break;
      case '8':
        out_string+=' ' + to_nine[7];
        break;
      case '9':
        out_string+=' ' + to_nine[8];
        break;
    }
    return out_string;
    }
    if(string[1]=='1') {
      switch(string[2]) {
      case '0':
        out_string+=' ' + desyatki_teen[0];
        return out_string;
      case '1':
        out_string+=' ' + desyatki_teen[1];
        return out_string;
      case '2':
        out_string+=' ' + desyatki_teen[2];
        return out_string;
      case '3':
        out_string+=' ' + desyatki_teen[3];
        return out_string;
      case '4':
        out_string+=' ' + desyatki_teen[4];
        return out_string;
      case '5':
        out_string+=' ' + desyatki_teen[5];
        return out_string;
      case '6':
        out_string+=' ' + desyatki_teen[6];
        return out_string;
      case '7':
        out_string+=' ' + desyatki_teen[7];
        return out_string;
      case '8':
        out_string+=' ' + desyatki_teen[8];
        return out_string;
      case '9':
        out_string+=' ' + desyatki_teen[9];
        return out_string;
    }
    }
    switch(string[1]) {
      case '2':
        out_string+=' ' + desyatki[0];
        break;  
      case '3':
        out_string+=' ' + desyatki[1];
        break;
      case '4':
        out_string+=' ' + desyatki[2];
        break;
      case '5':
        out_string+=' ' + desyatki[3];
        break;
      case '6':
        out_string+=' ' + desyatki[4];
        break;
      case '7':
        out_string+=' ' + desyatki[5];
        break;
      case '8':
        out_string+=' ' + desyatki[6];
        break;
      case '9':
        out_string+=' ' + desyatki[7];
        break;
    }
    if(string[2]=='0') return out_string;
    switch(string[2]) {
      case '1':
        out_string+=' ' + to_nine[0];
        break;
      case '2':
        out_string+=' ' + to_nine[1];
        break;
      case '3':
        out_string+=' ' + to_nine[2];
        break;
      case '4':
        out_string+=' ' + to_nine[3];
        break;
      case '5':
        out_string+=' ' + to_nine[4];
        break;
      case '6':
        out_string+=' ' + to_nine[5];
        break;
      case '7':
        out_string+=' ' + to_nine[6];
        break;
      case '8':
        out_string+=' ' + to_nine[7];
        break;
      case '9':
        out_string+=' ' + to_nine[8];
        break;      
    }
    return out_string;
  }
  if(string.length==2) {
    if(string[0]=='1') {
      switch(string[1]) {
      case '0':
        out_string+=desyatki_teen[0];
        return out_string;
      case '1':
        out_string+=desyatki_teen[1];
        return out_string;
      case '2':
        out_string+=desyatki_teen[2];
        return out_string;
      case '3':
        out_string+=desyatki_teen[3];
        return out_string;
      case '4':
        out_string+=desyatki_teen[4];
        return out_string;
      case '5':
        out_string+=desyatki_teen[5];
        return out_string;
      case '6':
        out_string+=desyatki_teen[6];
        return out_string;
      case '7':
        out_string+=desyatki_teen[7];
        return out_string;
      case '8':
        out_string+=desyatki_teen[8];
        return out_string;
      case '9':
        out_string+=desyatki_teen[9];
        return out_string;
      }
    }
    switch(string[0]) {
      case '2':
        out_string+=desyatki[0];
        break;  
      case '3':
        out_string+=desyatki[1];
        break;
      case '4':
        out_string+=desyatki[2];
        break;
      case '5':
        out_string+=desyatki[3];
        break;
      case '6':
        out_string+=desyatki[4];
        break;
      case '7':
        out_string+=desyatki[5];
        break;
      case '8':
        out_string+=desyatki[6];
        break;
      case '9':
        out_string+=desyatki[7];
        break;
    }
    if(string[1]=='0') return out_string;
    switch(string[1]) {
      case '1':
        out_string+=' ' + to_nine[0];
        break;
      case '2':
        out_string+=' ' + to_nine[1];
        break;
      case '3':
        out_string+=' ' + to_nine[2];
        break;
      case '4':
        out_string+=' ' + to_nine[3];
        break;
      case '5':
        out_string+=' ' + to_nine[4];
        break;
      case '6':
        out_string+=' ' + to_nine[5];
        break;
      case '7':
        out_string+=' ' + to_nine[6];
        break;
      case '8':
        out_string+=' ' + to_nine[7];
        break;
      case '9':
        out_string+=' ' + to_nine[8];
        break;      
    }
    return out_string;
  }
  if(string[0]=='0') return 'zero';
  switch(string[0]) {
      case '1':
        out_string+=to_nine[0];
        break;
      case '2':
        out_string+=to_nine[1];
        break;
      case '3':
        out_string+=to_nine[2];
        break;
      case '4':
        out_string+=to_nine[3];
        break;
      case '5':
        out_string+=to_nine[4];
        break;
      case '6':
        out_string+=to_nine[5];
        break;
      case '7':
        out_string+=to_nine[6];
        break;
      case '8':
        out_string+=to_nine[7];
        break;
      case '9':
        out_string+=to_nine[8];
        break;      
    }
  return out_string;
}
