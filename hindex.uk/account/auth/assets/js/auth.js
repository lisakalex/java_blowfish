$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $('#modal').on('hidden.bs.modal', function () {
        $("#modal .modal-content").html("");
    });
});
function SubmitForm(){
    var selector = $("form");
    selector.find("input,select,textarea").removeClass("border border-danger border-success");
    $("label").removeClass("text-danger text-success");
    if(_activeForm === false){
        e.preventDefault();
        return;
    }
    _activeForm = false;

    if(!selector.attr("action")){
        selector.submit();
        return;
    }
    if(selector.hasClass("post")){
        selector.submit();
        return;
    }
    var formURL = "assets/api/"+selector.attr("action");
    var formData = new FormData(selector[0]);
    $.ajax({
        url: formURL,
        type: "POST",
        data: formData,
        mimeType: "multipart/form-data",
        contentType: false,
        cache: false,
        processData: false,
        success: function (data, textStatus, $XHR) {
            _activeForm = true;
            var response = JSON.parse(data);
            if(typeof response.fn !== "undefined") {
                window[response.fn](response.message);
            }else{
                if(response.success === "false"){
                    swal("Oops!", response.message, "error");
                    if(typeof grecaptcha !== 'undefined'){
                        grecaptcha.reset();
                    }
                    $("#modal.show").modal('hide');
                }else {
                    swal("Great!", response.message, "success");
                }
            }
        },
        error: function (request, status, error) {
            _activeForm = true;
            _secured = false;
            var response = JSON.parse(request.responseText);
            if(typeof grecaptcha !== 'undefined'){
                grecaptcha.reset();
            }
            $("#modal.show").modal('hide');
            if(response.message){
                swal("Oops!", response.message, "error");
            }else{
                redirect("https://coinzilla.com/maintenance/");
            }

        }
    });
    e.preventDefault();
}
var _activeForm = true;
var _secured = false;
$(document).on("submit", "form", function(e)
{
    var selector = $(this);
    selector.find("input,select,textarea").removeClass("border border-danger border-success");
    $("label").removeClass("text-danger text-success");
    if(_activeForm === false){
        e.preventDefault();
        return;
    }
    _activeForm = false;

    if(!selector.attr("action")){
        selector.submit();
        return;
    }
    if(selector.hasClass("post")){
        selector.submit();
        return;
    }
    var formURL = "assets/api/"+selector.attr("action");
    var formData = new FormData(this);
    $.ajax({
        url: formURL,
        type: "POST",
        data: formData,
        mimeType: "multipart/form-data",
        contentType: false,
        cache: false,
        processData: false,
        success: function (data, textStatus, $XHR) {
            _activeForm = true;
            var response = JSON.parse(data);
            if(typeof response.fn !== "undefined") {
                window[response.fn](response.message);
            }else{
                if(response.success === "false"){
                    swal("Oops!", response.message, "error");
                    if(typeof grecaptcha !== 'undefined'){
                        grecaptcha.reset();
                    }
                    $("#modal.show").modal('hide');
                }else {
                    swal("Great!", response.message, "success");
                }
            }
        },
        error: function (request, status, error) {
            _activeForm = true;
            _secured = false;
            var response = JSON.parse(request.responseText);
            if(typeof grecaptcha !== 'undefined'){
                grecaptcha.reset();
            }
            $("#modal.show").modal('hide');
            if(response.message){
                swal("Oops!", response.message, "error");
            }else{
                redirect("https://coinzilla.com/maintenance/");
            }

        }
    });
    e.preventDefault();

}).on("click",".show-modal",function(e) {
    e.preventDefault();
    var action = $(this).data("action");
    var unique = $(this).data("id");
    var type = $(this).data("type");
    var options = {
        //"backdrop" : "static",
        "show":true
        //"keyboard":false
    };
    loading(".modal-content");
    $('#modal').modal(options).on('hidden.bs.modal');
    $.post("assets/auth/assets/data/"+action+".php", {unique:unique,type:type}, function (result) {
        $(".modal-content").html(result);
    });
}).on("keyup",".digit",function (e) {
    if((e.keyCode === 8 || e.key === "Backspace") && e.currentTarget.value==="") {
        $(e.currentTarget).prev('.digit').focus();
        return;
    }
    if (!$.isNumeric(e.currentTarget.value)) {
        $(e.currentTarget).val("");
        return;
    }
    if (e.currentTarget.value.length == e.currentTarget.maxLength) {
        $(e.currentTarget).next('.digit').focus();
    }
}).on("focus",".digit",function (e) {
    $(e.currentTarget).val("");
}).on("paste",".digit",function (e) {
    var data = e.originalEvent.clipboardData.getData('text');
    if(data.length > 6) return;
    if(!/^\d+$/.test(data)) return;
    $('.digit[name="code[5]"]').focus()
    var values = data.split('');
    $(values).each(function(index) {
        $('.digit[name="code[' + (index) + ']"]').val(values[index])
    });
}).on('keyup','.password-strength',function(e){
    var _this = $(e.currentTarget);
    var password = _this.val();
    var strength = 0;
    var lineBellow = _this.siblings('.line-strength');
    if (!$(lineBellow).hasClass('show')) {
        $(lineBellow).addClass('show');
    }
    if(password.length ===0 || password==="") {
        lineBellow.removeClass('show');
    }
    if (password.length <= 7) {
        lineBellow.removeClass('weak good strong');
        lineBellow.addClass('short');
        return 'Too short'
    }
    if (password.length > 7) strength += 1;
    if (password.match(/([a-z].)|(.[a-z])/)) strength += 1;
    if (password.match(/([A-Z].)|(.[A-Z])/)) strength += 1;
    if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) strength += 1;
    if (password.match(/([^A-Za-z0-9])/)) strength += 1;

    if (strength < 4) {
        lineBellow.removeClass('short good strong');
        lineBellow.addClass('weak');
        return 'Weak'
    } else if (strength === 4) {
        lineBellow.removeClass('weak short strong');
        lineBellow.addClass('good');
        return 'Good'
    } else {
        lineBellow.removeClass('weak good short');
        lineBellow.addClass('strong');
        return 'Strong'
    }
}).on("change","#company",function(e){
    if(this.checked){
        $('#companyDetails').removeClass("blur");
        $("#companyDetails").find("input,select,textarea").prop('required',true);
    }else{
        $("#companyDetails").find("input,select,textarea").prop('required',false);
        $('#companyDetails').addClass("blur");
    }
}).on('focus','.input-tooltip',function(e){
    if($(e.target).val()==='') {
        $($(e.target).data('tooltip')).find('span').tooltip('show');
    }
}).on('input','.input-tooltip',function(e){
        $($(e.target).data('tooltip')).find('span').tooltip('hide');
});
function confirmation(data){
    var json = JSON.parse(data);
    swal(json.title, json.content, "success");
    if(typeof json.redirect !== 'undefined'){
        setTimeout(function() {
            redirect(json.redirect);
        },3000);
    }
}
function loading(className){
    if(status) {
        $('#navHandler').append('<div class="loading-bar"></div>');
    }
    else {
        $(".loading-bar").remove();
    }

}
function redirect(location){
    window.location.href = location;
}
function registered(location){
    swal({
        title: 'Congratulations!',
        text: "Thank you for choosing us. We are redirecting you in a very short time!",
        type: 'success',
        showConfirmButton:false
    });
    setTimeout(function(){
        window.location.href = location;
    }, 3000);

}
function recovered(location){
    swal({
        title: 'Congratulations!',
        text: "Password successfully changed. We are redirecting you in a very short time!",
        type: 'success',
        showConfirmButton:false
    });
    setTimeout(function(){
        window.location.href = location;
    }, 3000);

}
function showModal(data){
    data = JSON.parse(data);
    if(typeof data.attr === 'undefined'){
        data.attr = {};
    }
    $.post("auth/assets/templates/"+data.name+".php", data.attr, function (result) {
        $(".modal-content").html(result);
        $('#modal').modal('show');
    }).fail(function(error) {
        swal("Oops!", "An error occurred, please try again or contact us.", "error");
    });
}
