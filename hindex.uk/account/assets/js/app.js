$(function ($) {
    window.App = {
        Models: {},
        Collections: {},
        Views: {},
        Router: {},
        Globals: {},
        Functions: {}
    };
    App.Globals.TableSelect = {};
    App.Router = Backbone.Router.extend({
        getParams: function () {
            return window.location.search.slice(1)
                .split('&')
                .reduce(function _reduce(/*Object*/ a, /*String*/ b) {
                    b = b.split('=');
                    a[b[0]] = decodeURIComponent(b[1]);
                    return a;
                }, {});
        },
        initialize: function () {
            this.bind('route', this.pageView);
        },
        pageView: function () {
            if (typeof ga !== "undefined" && ga !== null) {
                var path = Backbone.history.getFragment();
                ga('send', 'pageview', {page: "/" + path});
            }
        },
        routes: {
            "": "overview",
            "billing/": "billing",
            "billing/upload-documents/(?msg=:ver)": "billingDetailsUploadDocuments",
            "billing/withdraw-options/": "billingDetailsWithdrawOptions",
            "billing/history/": "billingHistory",
            "blacklist/": "blacklist",
            "security/": "security",
            "deposit/": "deposit",
            "deposit/bank-transfer/": "depositBankTransfer",
            "deposit/instant-cryptocurrency/": "depositInstantCrypto",
            "change-password/": "changePassword",
            "email-settings/": "emailSettings",
            "delete-account/": "deleteAccount",
            "2fa/": "twoFactorAuthentication",
            "reports/": "reports",
            "reports/:uid/": "reports",
            "optimize/:uid/": "optimize",
            "performance/:uid/": "performance",
            "referral-program/": "referralProgram",
            "campaigns/": "campaigns",
            "campaignDenis/": "campaignDenis",
            "campaigns/display-campaign/": "displayCampaign",
            "campaigns/native-campaign/": "nativeCampaign",
            "campaigns/popunder-campaign/": "popunderCampaign",
            "campaigns/archived/": "archivedCampaigns",
            "campaign/:uid/": "campaign",
            "websites/": "websites",
            "websites/new/": "newWebsite",
            "website/:uid/": "website",
            "logout/": "logout",
            '*notFound': 'notFound'
        },
        // notFound: function(){
        //     $("body").empty();
        //     window.location.href = 'https://coinzilla.com/notfound/';
        // },
        overview: function () {
            if (App.Globals.CurrentView !== null) $(App.Globals.CurrentView.el).unbind();
            App.Globals.CurrentView = new App.Views.Page({template: 'overview'});
            App.Functions.MenuActive('');
            document.title = 'Coinzilla - Finance & Crypto Display Advertising';
        },
        billing: function () {
            if (App.Globals.CurrentView !== null) $(App.Globals.CurrentView.el).unbind();
            App.Globals.CurrentView = new App.Views.Page({template: 'billing-details'});
            App.Functions.MenuActive('billing');
            document.title = 'Identification Details - Coinzilla - Finance & Crypto Display Advertising';
        },
        billingDetailsUploadDocuments: function (ver) {
            if (App.Globals.CurrentView !== null) $(App.Globals.CurrentView.el).unbind();
            App.Globals.CurrentView = new App.Views.Page({template: 'billing-details-upload-documents', attr: {'ver': ver}});
            App.Functions.MenuActive('billing');
            document.title = 'Upload Documents - Coinzilla - Finance & Crypto Display Advertising';
        },
        billingDetailsWithdrawOptions: function () {
            if (App.Globals.CurrentView !== null) $(App.Globals.CurrentView.el).unbind();
            App.Globals.CurrentView = new App.Views.Page({template: 'billing-details-withdraw-options'});
            App.Functions.MenuActive('billing');
            document.title = 'Withdraw Options - Coinzilla - Finance & Crypto Display Advertising';
        },
        billingHistory: function () {
            if (App.Globals.CurrentView !== null) $(App.Globals.CurrentView.el).unbind();
            App.Globals.CurrentView = new App.Views.Page({template: 'billing-history'});
            App.Functions.MenuActive('billing');
            document.title = 'Billing History - Coinzilla - Finance & Crypto Display Advertising';
        },
        blacklist: function () {
            if (App.Globals.CurrentView !== null) $(App.Globals.CurrentView.el).unbind();
            App.Globals.CurrentView = new App.Views.Page({template: 'blacklist'});
            App.Functions.MenuActive('blacklist');
            document.title = 'My Global Blacklist - Coinzilla - Finance & Crypto Display Advertising';
        },
        security: function () {
            if (App.Globals.CurrentView !== null) $(App.Globals.CurrentView.el).unbind();
            App.Globals.CurrentView = new App.Views.Page({template: 'security'});
            App.Functions.MenuActive('security');
            document.title = 'Account Security - Coinzilla - Finance & Crypto Display Advertising';
        },
        deposit: function () {
            if (App.Globals.CurrentView !== null) $(App.Globals.CurrentView.el).unbind();
            App.Globals.CurrentView = new App.Views.Page({template: 'deposit-crypto'});
            App.Functions.MenuActive('billing');
            document.title = 'Crypto Deposit - Coinzilla - Finance & Crypto Display Advertising';
        },
        depositBankTransfer: function () {
            if (App.Globals.CurrentView !== null) $(App.Globals.CurrentView.el).unbind();
            App.Globals.CurrentView = new App.Views.Page({template: 'deposit-bank-transfer'});
            App.Functions.MenuActive('billing');
            document.title = 'Bank Transfer Deposit - Coinzilla - Finance & Crypto Display Advertising';
        },
        depositInstantCrypto: function () {
            if (App.Globals.CurrentView !== null) $(App.Globals.CurrentView.el).unbind();
            App.Globals.CurrentView = new App.Views.Page({template: 'deposit-crypto-instant'});
            App.Functions.MenuActive('billing');
            document.title = 'Instant Crypto Deposit - Coinzilla - Finance & Crypto Display Advertising';
        },
        changePassword: function () {
            if (App.Globals.CurrentView !== null) $(App.Globals.CurrentView.el).unbind();
            App.Globals.CurrentView = new App.Views.Page({template: 'change-password'});
            App.Functions.MenuActive('profile');
            document.title = 'Change Password - Coinzilla - Finance & Crypto Display Advertising';
        },
        emailSettings: function () {
            if (App.Globals.CurrentView !== null) $(App.Globals.CurrentView.el).unbind();
            App.Globals.CurrentView = new App.Views.Page({template: 'email-settings'});
            App.Functions.MenuActive('profile');
            document.title = 'Email Settings - Coinzilla - Finance & Crypto Display Advertising';
        },
        deleteAccount: function () {
            if (App.Globals.CurrentView !== null) $(App.Globals.CurrentView.el).unbind();
            App.Globals.CurrentView = new App.Views.Page({template: 'delete-account'});
            App.Functions.MenuActive('profile');
            document.title = 'Delete Account - Coinzilla - Finance & Crypto Display Advertising';
        },
        twoFactorAuthentication: function () {
            if (App.Globals.CurrentView !== null) $(App.Globals.CurrentView.el).unbind();
            App.Globals.CurrentView = new App.Views.Page({template: '2fa'});
            App.Functions.MenuActive('security');
            document.title = '2FA Settings - Coinzilla - Finance & Crypto Display Advertising';
        },
        reports: function (uid) {
            if (App.Globals.CurrentView !== null) $(App.Globals.CurrentView.el).unbind();
            App.Globals.CurrentView = new App.Views.Reports({attr: {'uid': uid}, template: "reports"});
            App.Functions.MenuActive('reports');
            document.title = 'Reports - Coinzilla - Finance & Crypto Display Advertising';
        },
        optimize: function (uid) {
            if (App.Globals.CurrentView !== null) $(App.Globals.CurrentView.el).unbind();
            App.Globals.CurrentView = new App.Views.Reports({attr: {'uid': uid}, template: "optimize"});
            App.Functions.MenuActive('campaigns');
            document.title = 'Optimize Campaign - Coinzilla - Finance & Crypto Display Advertising';
        },
        performance: function (uid) {
            if (App.Globals.CurrentView !== null) $(App.Globals.CurrentView.el).unbind();
            App.Globals.CurrentView = new App.Views.Reports({attr: {'uid': uid}, template: "performance"});
            App.Functions.MenuActive('campaigns');
            document.title = 'Campaign Performance - Coinzilla - Finance & Crypto Display Advertising';
        },
        referralProgram: function () {
            if (App.Globals.CurrentView !== null) $(App.Globals.CurrentView.el).unbind();
            App.Globals.CurrentView = new App.Views.Page({template: 'referral-program'});
            App.Functions.MenuActive('referral-program');
            document.title = 'Refer a Friend - Coinzilla - Finance & Crypto Display Advertising';
        },
        campaigns: function () {
            if (App.Globals.CurrentView !== null) $(App.Globals.CurrentView.el).unbind();
            App.Globals.CurrentView = new App.Views.Page({template: 'campaigns', page: 'create-display-campaign'});
            App.Functions.MenuActive('campaigns');
            document.title = 'Campaigns - Coinzilla - Finance & Crypto Display Advertising';
        },
        campaignDenis: function () {
            if (App.Globals.CurrentView !== null) $(App.Globals.CurrentView.el).unbind();
            App.Globals.CurrentView = new App.Views.Page({template: 'campaigns', page: 'create-display-campaign-2'});
            App.Functions.MenuActive('campaignDenis');
            document.title = 'Campaigns DENIS TEST';
        },
        displayCampaign: function () {
            if (App.Globals.CurrentView !== null) $(App.Globals.CurrentView.el).unbind();
            App.Globals.CurrentView = new App.Views.Page({template: 'campaigns', page: 'create-display-campaign'});
            App.Functions.MenuActive('campaigns');
            document.title = 'Create a Display Campaign - Coinzilla - Finance & Crypto Display Advertising';
        },
        nativeCampaign: function () {
            if (App.Globals.CurrentView !== null) $(App.Globals.CurrentView.el).unbind();
            App.Globals.CurrentView = new App.Views.Page({template: 'campaigns', page: 'create-native-campaign'});
            App.Functions.MenuActive('campaigns');
            document.title = 'Create a Native Campaign - Coinzilla - Finance & Crypto Display Advertising';
        },
        popunderCampaign: function () {
            if (App.Globals.CurrentView !== null) $(App.Globals.CurrentView.el).unbind();
            App.Globals.CurrentView = new App.Views.Page({template: 'campaigns', page: 'create-popunder-campaign'});
            App.Functions.MenuActive('campaigns');
            document.title = 'Create a Popunder Campaign - Coinzilla - Finance & Crypto Display Advertising';
        },
        archivedCampaigns: function () {
            if (App.Globals.CurrentView !== null) $(App.Globals.CurrentView.el).unbind();
            App.Globals.CurrentView = new App.Views.Page({template: 'archived-campaigns'});
            App.Functions.MenuActive('campaigns');
            document.title = 'Archived Campaigns - Coinzilla - Finance & Crypto Display Advertising';
        },
        websites: function () {
            if (App.Globals.CurrentView !== null) $(App.Globals.CurrentView.el).unbind();
            App.Globals.CurrentView = new App.Views.Page({template: 'websites', page: 'new-website'});
            App.Functions.MenuActive('websites');
            document.title = 'Websites - Coinzilla - Finance & Crypto Display Advertising';
        },
        newWebsite: function () {
            if (App.Globals.CurrentView !== null) $(App.Globals.CurrentView.el).unbind();
            App.Globals.CurrentView = new App.Views.Page({template: 'websites', page: 'new-website'});
            App.Functions.MenuActive('websites');
            document.title = 'New Website - Coinzilla - Finance & Crypto Display Advertising';
        },
        website: function (uid) {
            if (App.Globals.CurrentView !== null) $(App.Globals.CurrentView.el).unbind();
            App.Globals.CurrentView = new App.Views.Page({template: 'websites', page: 'website', attr: {'uid': uid}});
            App.Functions.MenuActive('websites');
            document.title = 'Website - Coinzilla - Finance & Crypto Display Advertising';
        },
        campaign: function (uid) {
            if (App.Globals.CurrentView !== null) $(App.Globals.CurrentView.el).unbind();
            App.Globals.CurrentView = new App.Views.Page({template: 'campaigns', page: 'campaign', attr: {...this.getParams(), ...{'uid': uid}}});
            App.Functions.MenuActive('campaigns');
            document.title = 'Campaign Settings - Coinzilla - Finance & Crypto Display Advertising';
        },
        logout: function () {
            setTimeout(function () {
                window.location.href = 'logout/';
            }, 2000);
        }
    });
    App.Views.ParentView = Backbone.View.extend({
        _activeForm: true,
        globalEvents: {
            'click a.navigate': 'navigate',
            'click a.reload': 'reload',
            'click div.navigate': 'navigateTo',
            'click a.active': function (e) {
                e.preventDefault();
            },
            'click a.disabled': function (e) {
                e.preventDefault();
            },
            'submit form': 'formSubmit',
            'keyup .digit': 'nextDigit',
            'focus .digit': 'removeDigit',
            'paste .digit': 'pasteDigit',
            'click .copy': 'copy',
            'click .contact': 'contact',
            'click .advanced': 'advanced',
            'click .show-modal': 'showModal',
            'click .confirm': 'confirm',
            'keyup .password-strength': 'passwordStrength',
            'click .card-toggle .card-body': 'toggleCardFooter',
            'input .list-search .search': 'searchResults',
            'select2:close .select-count': 'selectCount',
            'select2:close .select-count-cp': 'selectCountCP',
            'select2:close .select-count-campaigns': 'selectCountCampaigns',
            'select2:open .select-count-campaigns': 'selectCountCampaignsOpen',
            'click .list-available .item': 'selectList',
            'click .quickSelectCountry a': 'quickSelectCountry',
            'click .list-selected .item': 'deselectList',
            'click .selected-card .reset': 'deselectAll',
            'click .select-all': 'selectAll',
            'click .check-vat': 'checkVat',
            'click .toggle-button': 'toggleElement',
            'input .card-select .search': 'searchTableSelect',
            'input .form-control.limit': 'limitCharactersInput',
            'click .consent': 'consent',
            'click .fetch': 'fetch'
        },
        customEvents: {},
        events: function () {
            return _.extend({}, this.globalEvents, this.customEvents);
        },
        advanced: function (e) {
            e.preventDefault();
            var _this = $(e.currentTarget);
            var _that = $(_this.data("id"));

            if (_that.hasClass("on")) {
                _this.removeClass("active");
                _that.removeClass("on");
                _this.find(".toggle_text").html("<span class='far fa-plus-circle'></span>");
                _that.stop(true, false).slideToggle(300);
            } else {
                $('.advanced-settings.on').stop(true, false).slideToggle(300);
                $('.advanced').find(".toggle_text").html("<span class='far fa-plus-circle'></span>");
                $('.advanced-settings').removeClass('on');
                _this.find(".toggle_text").html("<span class='far fa-minus-circle'></span>");
                _this.addClass("active");
                _that.addClass("on");
                _that.stop(true, false).slideToggle(300);
            }
        },
        showModal: function (e) {
            e.preventDefault();
            var _this = $(e.currentTarget);
            var arr = {};
            arr["name"] = _this.data("action");
            arr["attr"] = {};
            if (typeof _this.data("id") !== 'undefined') {
                arr["attr"]["uid"] = _this.data("id");
            }
            if (typeof _this.data("type") !== 'undefined') {
                arr["attr"]["type"] = _this.data("type");
            }
            App.Functions.Modal(JSON.stringify(arr));
        },
        toggleElement: function (e) {
            e.preventDefault();
            var target = $(e.currentTarget).data('toggle');
            $(target).stop(true, false).slideToggle(300);
        },
        checkVat: function (e) {
            e.preventDefault();
            var _this = $(e.currentTarget),
                target = _this.data("target"),
                vatCountry = $("#vatCountry").val(),
                vatNumber = $("#vatNumber").val();
            _this.html("<span class='icon far fa-spinner fa-pulse'></span>");
            $.ajax({
                url: 'assets/api/' + target,
                type: 'POST',
                data: {
                    "country": vatCountry,
                    "number": vatNumber
                },
                success: function (response) {
                    response = JSON.parse(response);
                    if (typeof response.success !== "undefined") {
                        if (response.success === "false") {
                            swal("Oops!", response.message, "error");
                            $("#vatInformation").removeClass("text-success").html("19% VAT will be charged");
                            $("#vatNumber").removeClass("border-success");
                            _this.html("Verify");
                        } else {
                            swal("Great!", response.message, "success");
                            $("#vatInformation").addClass("text-success").html("Your VAT number is valid");
                            $("#vatNumber").addClass("border-success");
                            _this.html("Verify");
                        }
                    } else {
                        swal("Oops!", response.message, "error");
                        $("#vatInformation").removeClass("text-success").html("19% VAT will be charged");
                        $("#vatNumber").removeClass("border-success");
                        _this.html("Verify");
                    }
                },
                error: function (response) {
                    response = JSON.parse(response.responseText);
                    if (response.message) {
                        swal("Oops!", response.message, "error");
                    } else {
                        App.Functions.Redirect("https://coinzilla.com/maintenance/");
                    }
                }
            });
        },
        confirm: function (e) {
            e.preventDefault();
            var _this = $(e.currentTarget),
                target = _this.data("target"),
                uid = _this.data("uid");
            if (typeof uid === 'undefined') {
                uid = null;
            }
            swal({
                title: 'Are you sure?',
                text: "You may not be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#2e7cf6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes!'
            }).then(function () {
                $.ajax({
                    url: 'assets/api/' + target,
                    type: 'POST',
                    data: {
                        "confirmed": true,
                        "uid": uid
                    },
                    success: function (response) {
                        response = JSON.parse(response);
                        swal(
                            'Done!',
                            'Your action has been completed.',
                            'success'
                        );
                        if (typeof response.fn !== "undefined") {
                            window.App.Functions[response.fn](response.message);
                        }
                    },
                    error: function (response) {
                        response = JSON.parse(response.responseText);
                        if (response.message) {
                            swal("Oops!", response.message, "error");
                        } else {
                            App.Functions.Redirect("https://coinzilla.com/maintenance/");
                        }
                    }
                });
            });
        },
        copy: function (e) {
            e.preventDefault();
            var _this = $(e.currentTarget);
            var id = _this.data("id");
            var text = _this.html();
            $("#" + id).select();
            document.execCommand("copy");
            _this.html("Copied!");
            setTimeout(function () {
                _this.html(text);
            }, 1000)
        },
        navigate: function (e) {
            e.preventDefault();
            $('.toggle-content').hide();
            $('.navbar-collapse').collapse('hide');
            var path = $(e.currentTarget).attr("href");
            Backbone.history.navigate(path, {trigger: true});
        },
        navigateTo: function (e) {
            e.preventDefault();
            var path = $(e.currentTarget).data("href");
            Backbone.history.navigate(path, {trigger: true});
        },
        reload: function (e) {
            e.preventDefault();
            App.Functions.Reload();
        },
        formSubmit: function (e) {
            var selector = $(e.currentTarget);
            selector.find("input,select,textarea").removeClass("border border-danger border-success");
            $("label").removeClass("text-danger text-success");
            selector.find(".submit-icon").removeClass("fa-check").addClass("fa-spinner fa-pulse");
            if (this._activeForm === false) {
                e.preventDefault();
                return;
            }
            this._activeForm = false;
            if (!selector.attr("action")) {
                selector.submit();
                return;
            }
            if (selector.hasClass("post")) {
                selector.submit();
                return;
            }

            var formURL = "assets/api/" + selector.attr("action");
            var formData = new FormData(e.currentTarget);
            var that = this;
            $.ajax({
                url: formURL,
                type: "POST",
                data: formData,
                mimeType: "multipart/form-data",
                contentType: false,
                cache: false,
                processData: false,
                success: function (data, textStatus, $XHR) {
                    that._activeForm = true;
                    var response = JSON.parse(data);
                    if (typeof response.fn !== "undefined") {
                        window.App.Functions[response.fn](response.message);
                    } else {
                        if (typeof response.success !== "undefined") {
                            if (response.success === "false") {
                                swal("Oops!", response.message, "error");
                            } else {
                                swal("Great!", response.message, "success");
                            }
                        } else {
                            swal("Great!", response.message, "success");
                        }
                    }
                    App.Globals.Alert.render();
                    selector.find(".submit-icon").removeClass("fa-spinner fa-pulse").addClass("fa-check");
                },
                error: function (request, status, error) {
                    that._activeForm = true;
                    var response = JSON.parse(request.responseText);
                    if (typeof response.message !== "undefined") {
                        swal("Oops!", response.message, "error");
                    } else {
                        App.Functions.Redirect("https://coinzilla.com/maintenance/");
                    }
                    selector.find(".submit-icon").removeClass("fa-spinner fa-pulse").addClass("fa-check");
                }
            });
            e.preventDefault();
        },
        afterRender: function () {
            $('[data-toggle="tooltip"]').tooltip();
            $('.dtable').DataTable({
                responsive: true,
                "order": []
            });
            this.tableSelect();
            $('.select2').select2();
            $('.select-count').trigger('select2:close');
            $('.select-count-cp').trigger('select2:close');
            $(".date-pick").daterangepicker({
                locale: {
                    format: 'YYYY-MM-DD'
                },
                singleDatePicker: true,
                showDropdowns: true
            });
            $('.daterange').daterangepicker({
                locale: {
                    format: 'YYYY-MM-DD'
                },
                startDate: $(".startDate").val(),
                endDate: $(".endDate").val(),
                minDate: moment().subtract(1, 'years'),
                maxDate: moment(),
                applyClass: "btn-primary",
                cancelClass: "btn-dark",
                orientation: "auto",
                alwaysShowCalendars: true,
                ranges: {
                    'Today': [moment(), moment()],
                    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
                    'Last 3 Months': [moment().subtract(90, 'days'), moment()]
                }
            }, function (start, end, label) {
                $(".startDate").val(start.format('YYYY-MM-DD'));
                $(".endDate").val(end.format('YYYY-MM-DD'));
            });
            $('#modal').on('hidden.bs.modal', function () {
                $("#modal .modal-content").html("");
            });
        },
        nextDigit: function (e) {

            if ((e.keyCode === 8 || e.key === "Backspace") && e.currentTarget.value === "") {
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
        },
        removeDigit: function (e) {
            $(e.currentTarget).val("");
        },
        pasteDigit: function (e) {
            console.log("test");
            var data = e.originalEvent.clipboardData.getData('text');
            console.log(data);
            if (data.length > 6) return;
            console.log(1);
            if (!/^\d+$/.test(data)) return;
            console.log(2);
            $('.digit[name="code[5]"]').focus();
            var values = data.split('');
            $(values).each(function (index) {
                $('.digit[name="code[' + (index) + ']"]').val(values[index])
            });
        },
        passwordStrength: function (e) {
            var _this = $(e.currentTarget);
            var password = _this.val();
            var strength = 0;
            var lineBellow = _this.siblings('.line-strength');
            if (!$(lineBellow).hasClass('show')) {
                $(lineBellow).addClass('show');
            }
            if (password.length === 0 || password === "") {
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
            } else if (strength == 4) {
                lineBellow.removeClass('weak short strong');
                lineBellow.addClass('good');
                return 'Good'
            } else {
                lineBellow.removeClass('weak good short');
                lineBellow.addClass('strong');
                return 'Strong'
            }
        },
        limitCharactersInput: function (e) {
            var _this = $(e.currentTarget),
                maxLength = _this.attr('maxlength'),
                length = _this.val().length,
                remaining = maxLength - length,
                _span = _this.next("span.limit");
            if (remaining <= 0) {
                remaining = 0;
                _span.addClass("text-danger");
            } else {
                _span.removeClass("text-danger");
            }
            _span.attr("data-remaining", remaining);
        },
        toggleCardFooter: function (e) {
            $(e.currentTarget).siblings('.card-footer').stop(true, false).slideToggle(300);
        },
        searchResults: function (e) {
            var text = $(e.target).val();
            var textSplit = text.toLowerCase().split(' ');
            var flagResults = true;
            if ($('.search-results .no-data').length === 0) {
                $('.search-results').append('<div class="no-data">No data found</div>');
            }
            if (text.length === 0) {
                $('.search-results .day').removeClass('hidden');
                $('.search-results .no-data').removeClass('show');
                return;
            }
            $.each($('.search-results .day'), function (key, item) {
                var title = $(item).data('title').toLowerCase();
                var date = $(item).data('date').toLowerCase();
                var status = $(item).data('status').toLowerCase();
                var found = false;
                _.each(textSplit, function (string) {
                    var regExp = new RegExp(string);
                    if (title.search(regExp) !== -1 || date.search(regExp) !== -1 || status.search(regExp) !== -1) {
                        $(item).removeClass('hidden');
                        found = true;
                        flagResults = false;
                    }
                });
                if (!found) {
                    $(item).addClass('hidden');
                }
            });
            flagResults ? $('.search-results .no-data').addClass('show') : $('.search-results .no-data').removeClass('show');
        },
        selectCount: function (e) {
            var uldiv = $(e.currentTarget).siblings('span.select2').find('ul');
            var countSelected = $(e.currentTarget).select2('data').length;
            if (countSelected !== 0) {
                uldiv.html("<li>" + countSelected + " " + $(e.target).data('selected') + "</li>");
            } else {
                uldiv.html("<li>" + $(e.target).data('noelements') + "</li>");
            }
        },

        selectCountCP: function (e) {
            var uldiv = $(e.currentTarget).siblings('span.select2').find('ul');
            var countSelected = $(e.currentTarget).select2('data').length;

            $(uldiv).find('.select2-selection__choice').remove();
            $(uldiv).find('.select2-selection__clear').remove();
            $(uldiv).find('.selected-option-custom').remove();

            if (countSelected !== 0) {
                uldiv.prepend("<li class='selected-option-custom'>" + countSelected + " " + $(e.target).data('selected') + "</li>");
            } else {
                uldiv.prepend("<li class='selected-option-custom'>" + $(e.target).data('noelements') + "</li>");
            }
        },

        selectCountCampaigns: function (e, item) {
            var uldiv = $(e.currentTarget).siblings('span.select2').find('ul');
            var countSelected = $(e.currentTarget).select2('data').length;
            var element = e.currentTarget;

            $(uldiv).find('.select2-selection__choice').remove();
            $(uldiv).find('.select2-selection__clear').remove();
            $(uldiv).find('.selected-option-custom').remove();

            if (countSelected !== 0) {
                if ($(element).val().includes('all')) {
                    uldiv.prepend("<li class='selected-option-custom'>All Campaigns</li>");
                } else {
                    uldiv.prepend("<li class='selected-option-custom'>" + countSelected + " " + $(e.target).data('selected') + "</li>");
                }
            } else {
                uldiv.prepend("<li class='selected-option-custom'>" + $(e.target).data('noelements') + "</li>");
            }
            $(uldiv).find('.select2-search.select2-search--inline').css("display", "none");
            $(uldiv).find('.selected-option-custom').css("display", "block");
        },
        selectCountCampaignsOpen: function (e, item) {
            var uldiv = $(e.currentTarget).siblings('span.select2').find('ul');
            $(uldiv).find('.selected-option-custom').css("display", "none");
            $(uldiv).find('.select2-search.select2-search--inline').css("display", "inline-block");
            $(uldiv).find('.select2-search.select2-search--inline input').css("margin", "0").focus();
            $(uldiv).parent('.select2-selection--multiple').css("padding", "9px 15px");
            $(uldiv).parent('.select2-selection--multiple').css("margin", "0");
        },

        selectList: function (e, item, forceAll) {
            var element;
            if (typeof item === "undefined") {
                element = e.currentTarget;
            } else {
                element = item;
            }
            if ($(element).hasClass('selected') && (typeof forceAll === "undefined")) {
                this.deselectList('', $(element).parents('.table-select').find('.list-selected .item[data-save="' + $(element).data('save') + '"]'));
                return;
            }
            var actionElement = $(element).parents('.table-select').find('.list-selected .item[data-save="' + $(element).data('save') + '"]');
            $(element).addClass('selected');
            actionElement.addClass('selected');
            actionElement.find('input').prop("checked", true);
            this.changeDataTable('add', $(element).data('category'), $(element).data('save'));
            (typeof item === "undefined") ? this.eventFire(e, '.item', 'select') : this.eventFire('', '.item', 'select', item);

        },
        quickSelectCountry: function (e) {
            var countries = $(e.target).data('countries');
            var _this = this;
            this.deselectAllQuickCountry(e);
            $.each(countries, function (e, itemC) {
                var element = $(".table-select").find('.list-selected .item[data-save="' + itemC + '"]');
                if (element.length > 0) {
                    if ($(element).hasClass('selected') && (typeof forceAll === "undefined")) {
                        _this.deselectList('', $(element).parents('.table-select').find('.list-selected .item[data-save="' + itemC + '"]'));
                        return;
                    }

                    var actionElement = $(element).parents('.table-select').find('.list-available .item[data-save="' + itemC + '"]');
                    $(element).addClass('selected');
                    actionElement.addClass('selected');
                    $(element).find('input').prop("checked", true);
                    _this.changeDataTable('add', 'countries', itemC);
                    (typeof element === "undefined") ? _this.eventFire(e, '.item', 'select') : _this.eventFire('', '.item', 'select', element);
                }
            });
        },
        deselectList: function (e, item) {
            var element;
            if (typeof item === "undefined") {
                element = e.currentTarget;
                $(element).parents('.table-select').find('.list-available .item[data-save="' + $(element).data('save') + '"]').removeClass('selected');
                $(element).removeClass('selected');
                $(element).find('input').prop("checked", false);
                this.eventFire(e, '.item', 'deselect');
            } else {
                element = item;
                $(element).parents('.table-select').find('.list-available .item[data-save="' + $(element).data('save') + '"]').removeClass('selected');
                $(element).removeClass('selected');
                $(element).find('input').prop("checked", false);
                this.eventFire('', '.item', 'deselect', item);
            }
            this.changeDataTable('remove', $(element).data('category'), $(element).data('save'));
        },
        eventFire: function (e, selector, action, item) {
            var element = (typeof item !== "undefined") ? item : e.currentTarget;
            var currentEmelent = $(element).parent('.list-select');
            if (action === "select") {
                $(element).parents('.table-select').find('.selected-card .list-select').find('.no-data').removeClass('active');
                if (currentEmelent.find('.selected').length === currentEmelent.find('.item').length) {
                    currentEmelent.find('.no-data').addClass('active');
                }
            }
            if (action === "deselect") {
                $(element).parents('.table-select').find('.browse-card .list-select').find('.no-data').removeClass('active');
                if (currentEmelent.find(selector + '.selected').length === 0) {
                    currentEmelent.find('.no-data').addClass('active');
                } else {
                    currentEmelent.find('.no-data').removeClass('active');
                }
            }

        },
        deselectAll: function (e) {
            e.preventDefault();
            var _this = this;
            $.each($(e.currentTarget).parents('.table-select').find('.selected-card .day.selected'), function (key, item) {
                _this.deselectList('', item);
            });
        },
        deselectAllQuickCountry: function (e) {
            e.preventDefault();
            var _this = this;
            $.each($(e.currentTarget).parents('.table-select').find('.selected-card .day.selected'), function (key, item) {
                _this.deselectList(e, item);
            });
        },
        selectAll: function (e) {
            e.preventDefault();
            var _this = this;
            var category = $(e.currentTarget).parents('.table-select');
            $.each(category.find('.browse-card .item'), function (key, item) {
                if (!$(item).hasClass('selected')) {
                    _this.selectList('', item, true);
                }
            });
        },
        searchTableSelect: function (e) {
            var text = $(e.target).val();
            var textSplit = text.toLowerCase().split(' ');
            var currentTable = $(e.currentTarget).parents('.card-select');
            if (text.length === 0) {
                currentTable.find('.list-select .item').removeClass('hidden');
                currentTable.find('.list-select .no-data').removeClass('show');
                return;
            }
            var flagResults = true;
            $.each(currentTable.find('.item'), function (key, item) {
                var description = $(item).data('description').toLowerCase();
                var keywords = $(item).data('save').toLowerCase();
                var category = $(item).data('category').toLowerCase();
                var found = false;
                $.each(textSplit, function (index, string) {
                    var regExp = new RegExp(string);
                    if (description.search(regExp) !== -1 || keywords.search(regExp) !== -1 || category.search(regExp) !== -1) {
                        $(item).removeClass('hidden');
                        found = true;
                        flagResults = false;
                    }
                });
                if (!found) {
                    $(item).addClass('hidden');
                }
            });
            flagResults ? $(currentTable).find('.no-data').addClass('show') : $(currentTable).find('.no-data').removeClass('show');
        },
        tableSelect: function () {
            App.Globals.TableSelect = {};
            $('.list-select').append('<div class="no-data">No data available </div>');
            $.each($('.list-select'), function (key, item) {
                if ($(item).find('.day.selected').length === 0) {
                    if ($(item).hasClass('list-selected')) {
                        $(item).find('.no-data').addClass('active');
                    }
                }
                if ($(item).find('.day.selected').length === $(item).find('.day').length) {
                    if ($(item).hasClass('list-available')) {
                        $(item).find('.no-data').addClass('active');
                    }
                }
                if ($(item).hasClass('list-selected')) {
                    $.each($(item).find('.day'), function (key, value) {
                        if ($(value).hasClass('selected')) {
                            $(value).append('<input type="checkbox" name="' + $(value).data("category") + '[]" value="' + $(value).data("save") + '" checked="checked" />');
                            if (App.Globals.TableSelect.hasOwnProperty($(value).data("category"))) {
                                App.Globals.TableSelect[$(value).data("category")].push($(value).data("save"));
                            } else {
                                App.Globals.TableSelect[$(value).data("category")] = [];
                                App.Globals.TableSelect[$(value).data("category")].push($(value).data("save"));
                            }
                        } else {
                            if (!App.Globals.TableSelect.hasOwnProperty($(value).data("category"))) {
                                App.Globals.TableSelect[$(value).data("category")] = [];
                            }
                            $(value).append('<input type="checkbox" name="' + $(value).data("category") + '[]" value="' + $(value).data("save") + '"/>');
                        }
                    });
                }
            });
            $.each(App.Globals.TableSelect, function (key, value) {
                $('.' + key + ".count").html(value.length);
            });
        },
        changeDataTable: function (action, category, value) {
            if (action === 'add') {
                if (App.Globals.TableSelect.hasOwnProperty(category)) {
                    App.Globals.TableSelect[category].push(value);
                } else {
                    App.Globals.TableSelect[category] = [];
                    App.Globals.TableSelect[category].push(value);
                }
            } else {
                App.Globals.TableSelect[category] = $.map(App.Globals.TableSelect[category], function (val) {
                    return val !== value ? val : null;
                });
            }
            $('.' + category + '.count').html(App.Globals.TableSelect[category].length);
        },
        loading: function (status) {
            if (status === 'start') {
                $("#wrapperHandler").addClass("blur");
                $('#wrap__loading').html('<div class="loading-bar loading"></div>');
            }
            if (status === 'done') {
                $('.loading-bar').addClass('done');
                $("#wrapperHandler").removeClass("blur");
                setTimeout(function () {
                    $(".loading-bar").animate({
                        opacity: 'hide',
                        left: '100%'
                    }, 'slow', 'linear', function () {
                        $(this).remove();
                    });
                }, 300);
            }
        },
        contact: function (e) {
            e.preventDefault();
            Intercom('show');
        },
        consent: function (e) {
            e.preventDefault();
            var _this = $(e.currentTarget),
                target = _this.data("target");
            $.ajax({
                url: 'assets/api/' + target,
                type: 'POST',
                data: {
                    "confirmed": true
                },
                success: function (response) {
                    response = JSON.parse(response);
                    $("#modal.show").modal('hide');
                },
                error: function (response) {
                    response = JSON.parse(response.responseText);
                    if (response.message) {
                        swal("Oops!", response.message, "error");
                    } else {
                        App.Functions.Redirect("https://coinzilla.com/maintenance/");
                    }
                }
            });
        },
        fetch: function (e) {
            e.preventDefault();
            var _this = $(e.currentTarget),
                target = _this.data("target");
            $.ajax({
                url: 'assets/api/' + target,
                type: 'POST',
                data: {},
                success: function (response) {
                    response = JSON.parse(response);
                    if (typeof response.fn !== "undefined") {
                        window.App.Functions[response.fn](response.message);
                    } else {
                        if (typeof response.success !== "undefined") {
                            if (response.success === "false") {
                                swal("Oops!", response.message, "error");
                            } else {
                                swal("Great!", response.message, "success");
                            }
                        } else {
                            swal("Great!", response.message, "success");
                        }
                    }
                },
                error: function (response) {
                    response = JSON.parse(response.responseText);
                    if (response.message) {
                        swal("Oops!", response.message, "error");
                    } else {
                        App.Functions.Redirect("https://coinzilla.com/maintenance/");
                    }
                }
            });
        },
    });
    App.Functions.Redirect = function (path) {
        if (typeof path.status !== 'undefined') {
            if (path.status === 503) {
                window.location.href = 'https://coinzilla.com/maintenance/';
            }
            if (path.status === 500) {
                window.location.href = 'https://coinzilla.com/maintenance/';
            }
            if (path.status === 501) {
                window.location.href = 'https://coinzilla.com/maintenance/';
            }
            if (path.status === 401) {
                window.location.href = '../display/logout/';
            }
            if (path.status === 404) {
                window.location.href = 'https://coinzilla.com/notfound/';
            }
            if (path.status === 403) {
                window.location.href = '../display/logout/';
            }
        } else {
            window.location.href = path;
        }
    };
    App.Functions.Reload = function () {
        $("#modal.show").modal('hide');
        Backbone.history.loadUrl(Backbone.history.fragment);
        App.Globals.Alert.render();
    };
    App.Functions.Navigate = function (path) {
        Backbone.history.navigate(path, {trigger: true});
    };
    App.Functions.Message = function (content, type) {
        swal("Oops!", content, type);
    };
    App.Functions.Modal = function (data) {
        data = JSON.parse(data);
        if (typeof data.attr === 'undefined') {
            data.attr = {};
        }
        $.post("assets/templates/modal/" + data.name + "/", data.attr, function (result) {
            $(".modal-content").first().html(result);
            if (typeof data.sticky !== 'undefined') {
                $('#modal').first().modal({backdrop: 'static', keyboard: false}, 'show');
            } else {
                $('#modal').first().modal('show');
            }
        }).fail(function (error) {
            swal("Oops!", "An error occurred, please try again or contact us.", "error");
        });
    };
    App.Functions.Confirmation = function (data) {
        var json = JSON.parse(data);
        if (typeof json.keep_modal === 'undefined') {
            $("#modal.show").modal('hide');
        } else {
            if (!json.keep_modal) {
                $("#modal.show").modal('hide');
            }
        }
        swal(json.title, json.content, "success");
        if (typeof json.redirect !== 'undefined') {
            if (json.redirect) {
                Backbone.history.navigate(json.redirect, {trigger: true});
            }
        } else {
            Backbone.history.loadUrl(Backbone.history.fragment);
        }
    };
    App.Functions.MenuActive = function (page) {
        $("#mainNavBar ul li").removeClass('active');
        $('a[href^="' + page + '/"]').parent().addClass('active');
    };
    App.Functions.SubPage = function (data) {
        data = JSON.parse(data);
        if (typeof data.attr === 'undefined') {
            data.attr = {};
        }
        $.post("assets/templates/pages/" + data.name + "/", data.attr, function (result) {
            $("#list-content").html(result);
            App.Globals.CurrentView.afterRender();
        }).fail(function (error) {
            swal("Oops!", "An error occurred, please try again or contact us.", "error");
        });
    };
    App.Functions.PayButton = function (data) {
        data = JSON.parse(data);
        if (typeof data.url != 'undefined') {
            $("#depositAmount").attr("disabled", true);
            $("#paymentAddress").val(data.url);
            $("#payAddress").attr("href", data.url);
            $("#result").find(".address-box").addClass("active");
            $("#result").find("#generateAddressWrapper").remove();
        }
    }
    App.Globals.CurrentView = null;
    App.Views.Header = App.Views.ParentView.extend({
        el: '#headerHandler',
        customEvents: {
            'click a.logout': 'logout'
        },
        logout: function (e) {
            e.preventDefault();
            $.ajax({
                url: 'api/logout/',
                type: 'GET',
                error: function (xhr) {
                    App.Functions.Redirect(xhr);
                }
            });
        },
        template: _.template($("#headerHandlerView").html()),
        initialize: function () {
            this.render();
        },
        render: function () {
            this.$el.html(this.template());
        }
    });
    App.Views.Alert = App.Views.ParentView.extend({
        el: '#alertHandler',
        initialize: function () {
            this.render();
        },
        render: function () {
            var that = this;
            $.get('assets/templates/pages/alert/', function (data) {
                that.template = _.template(data);
                that.$el.html(that.template());
            });
        }
    });
    App.Views.Footer = App.Views.ParentView.extend({
        el: '#footerHandler',
        template: _.template($("#footerHandlerView").html()),
        initialize: function () {
            this.render();
        },
        render: function () {
            this.$el.html(this.template());
        }
    });
    App.Views.Modal = App.Views.ParentView.extend({
        el: '#modalHandler',
        template: _.template($("#modalHandlerView").html()),
        initialize: function () {
            this.render();
        },
        render: function () {
            this.$el.html(this.template({general: null}));
        }
    });
    App.Views.Page = App.Views.ParentView.extend({
        el: '#wrapperHandler',
        initialize: function (options) {
            this.loading('start');
            this.render(options);
        },
        render: function (options) {
            var that = this;
            if (typeof options.attr === 'undefined') {
                options.attr = {}
            }
            $.get('assets/templates/pages/' + options.template + '/', options.attr, function (data) {
                that.$el.html(data);
                that.afterRender();
                if (typeof options.page !== 'undefined') {
                    $.get('assets/templates/pages/' + options.page + '/', options.attr, function (result) {
                        $("#list-content").html(result);
                        that.afterRender();
                    }).fail(function (xhr, textStatus, errorThrown) {
                        App.Functions.Redirect(xhr.status);
                    });
                }
                if (typeof App.Globals.Footer === 'undefined')
                    App.Globals.Footer = new App.Views.Footer();
            }, 'html').done(function () {
                that.loading('done');
            }).fail(function (xhr, textStatus, errorThrown) {
                App.Functions.Redirect(xhr.status);
            });
        }
    });
    App.Views.Reports = App.Views.ParentView.extend({
        el: '#wrapperHandler',
        customEvents: {
            'click .switchable': 'disableZones'
        },
        disableZones: function (e) {
            var value = 0;
            var _this = $(e.currentTarget);
            if (_this.is(":checked")) {
                value = 1;
            }
            var id = _this.data("u");
            var parent = _this.data("parent");
            $.post("assets/api/target-zones/", {parent: parent, u: id, value: value}).fail(function (xhr, textStatus, errorThrown) {
                App.Functions.Redirect(xhr.status);
            });
        },
        initialize: function (options) {
            this.loading('start');
            this.render(options);
        },
        formSubmit: function (e) {
            if (this._activeForm === false) {
                e.preventDefault();
                return;
            }
            this.loading('start');
            this._activeForm = false;
            var formURL = 'assets/templates/pages/' + this.loadTemplate + '/';
            var formData = new FormData(e.currentTarget);
            var that = this;
            $.ajax({
                url: formURL,
                type: "POST",
                data: formData,
                mimeType: "multipart/form-data",
                contentType: false,
                cache: false,
                processData: false,
                success: function (data, textStatus, $XHR) {
                    that._activeForm = true;
                    that.template = _.template(data);
                    that.$el.html(that.template());
                    that.afterRender();
                    that.loading('done');
                },
                error: function (request, status, error) {
                    that._activeForm = true;
                    var response = JSON.parse(request.responseText);
                    if (response.message) {
                        swal("Oops!", response.message, "error");
                    } else {
                        App.Functions.Redirect(status);
                    }
                    that.loading('done');
                }
            });
            e.preventDefault();
        },
        render: function (options) {
            var that = this;
            if (typeof options.attr === 'undefined') {
                options.attr = {}
            }
            this.loadTemplate = options.template;
            $.get('assets/templates/pages/' + this.loadTemplate + '/', options.attr, function (data) {
                that.$el.html(data);
                that.afterRender();
                if (typeof App.Globals.Footer === 'undefined')
                    App.Globals.Footer = new App.Views.Footer();
            }, 'html').done(function () {
                that.loading('done');
            }).fail(function (xhr, textStatus, errorThrown) {
                App.Functions.Redirect(xhr.status);
            });
        }
    });
    App.Views.UserInterface = App.Views.ParentView.extend({
        initialize: function () {
            new App.Views.Header();
            App.Globals.Alert = new App.Views.Alert();
            new App.Views.Modal();
            this.initializeRouter();
        },
        initializeRouter: function () {
            this.router = new App.Router();
            Backbone.history.start({pushState: true, root: "/"});
        }

    });
    window.addEventListener("email:verification", function (evt) {
        var arr = {};
        arr["name"] = "verify-email";
        arr["sticky"] = true;
        arr["attr"] = {};
        App.Functions.Modal(JSON.stringify(arr));
    }, false);
    window.addEventListener("consent:terms", function (evt) {
        var arr = {};
        arr["name"] = "consent-terms";
        arr["sticky"] = true;
        arr["attr"] = {};
        App.Functions.Modal(JSON.stringify(arr));
    }, false);
    window.addEventListener("message:processing-document-identity", function (evt) {
        swal("Application Under Review", "We'll be back to you as soon as the review will be processed.", "success");
    }, false);
    window.addEventListener("message:error-document-identity", function (evt) {
        swal("Oops", "It seems that there's an error with our partner, please wait 5 minutes and try again.", "error");
    }, false);
    window.addEventListener("billing:verification", function (evt) {
        App.Functions.Navigate("billing/");
    }, false);
    window.addEventListener("billing:campaign", function (evt) {
        App.Functions.Navigate("campaigns/");
        swal("Oops", "You'll be able to deposit funds as soon as a campaign is approved.", "warning");
    }, false);
    new App.Views.UserInterface();
});


function checkPassword(str) {
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}$/;
    return re.test(str);
}

// debugger;
document.addEventListener("blur", myBlurFunction);

function myBlurFunction() {
    document.getElementById("newPasswordMessage").innerHTML = "";
}

function validateFormPass() {
    var pw1 = document.getElementById("newPassword").value;
    var pw2 = document.getElementById("retypePassword").value;
    // debugger;
    if (!checkPassword(pw1)) {
        document.getElementById("newPasswordMessage").innerHTML = "Please enter a stronger password";
        return false;
    }

    if (pw1 !== pw2) {
        document.getElementById("retypePasswordMessage").innerHTML = "Passwords do not match";
        return false;
    }
}

$(document).on('keyup', '.password-strength', function (e) {
    var _this = $(e.currentTarget);
    var password = _this.val();
    var strength = 0;
    var lineBellow = _this.siblings('.line-strength');
    if (!$(lineBellow).hasClass('show')) {
        $(lineBellow).addClass('show');
    }
    if (password.length === 0 || password === "") {
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
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

function wrongPassword() {
    Swal.fire({
        title: 'Wrong password',
        text: 'You have entered an incorrect current password',
        // position: 'top-end',
        icon: 'error',
        // showConfirmButton: false,
        // timer: 1500
    });
}

function passwordChanged() {
    Swal.fire({
        title: 'Password changed',
        text: 'You have successfully changed you password',
        // position: 'top-end',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
    });
}

function copyFunction(x, y) {
    debugger;
    var copyText = document.getElementById(x);
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");

    var tooltip = document.getElementById(y);
    tooltip.innerHTML = "Copied";
}

function outFunc(x, y) {
    var tooltip = document.getElementById(x);
    tooltip.innerHTML = "Copy " + y;
}

const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

