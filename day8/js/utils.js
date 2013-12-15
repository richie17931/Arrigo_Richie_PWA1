/**
 * Created by richardarrigo on 12/14/13.
 */

window.utils = {};

utils.getTriArea = function(b,h){
    return .5*(b*h);
}

utils.getPyramidVolume = function(b,h){
    return 1/3*(b*h);
}

utils.celciusToFahrenheit = function(c){
    return ((c*9)/5)+32;
}

utils.fahrenheitToCelcius = function(f){
    return ((f-32)*5)/9;
}
