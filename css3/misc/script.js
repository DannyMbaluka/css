"use strict";
function findLableForControl(el) {
    var idVal = el.id;
    var labels = document.getElementsByTagName('label');
    for (var i = 0; i < labels.length; i++) {
        if (labels[i].htmlFor === idVal)
            return labels[i].innerHTML;
    }
}

window.onload = function () {
    var fields = document.forms["signup"].getElementsByTagName("input");
    console.log(fields);
    for (var i = 0; i < fields.length; i++) {
        var elementId = fields[i].id;
        if (elementId) {
            document.getElementById(elementId).onblur = function (evt) {
                var field = document.getElementById(evt.target.id);
                var label = findLableForControl(field);
                if (field.required) {
                    if (field.value.length === 0) {
                        var div = document.createElement('div');
                        div.textContent = label + " is required";
                        console.log(div);
                        document.body.appendChild(div);
                    }
                }
            };
        }
    }
};