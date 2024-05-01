<?php

/**
 * Custom booking form for header
 *
 * @package J8 Hotel
 */
?>
<script src="https://cdn.jsdelivr.net/npm/vue-hotel-datepicker@4.6.0/dist/vueHotelDatepicker.umd.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js" defer></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vue-hotel-datepicker@4.6.0/dist/vueHotelDatepicker.min.css" />
<style type="text/css">
    /* Form element UI */
    #header_booking_form_container .ui.selection.dropdown {
        min-width: 0;
    }

    #header_booking_form_container .ui.form,
    #header_booking_form_container .ui.form .field .dropdown,
    #header_booking_form_container .ui.form .field .dropdown .menu>.item {
        font-size: 1em;
    }

    #header_booking_form_container .ui.form input[readonly] {
        cursor: pointer;
    }

    #header_booking_form_container .ui.form input:not([type]),
    #header_booking_form_container .ui.form input[type=date],
    #header_booking_form_container .ui.form input[type=datetime-local],
    #header_booking_form_container .ui.form input[type=email],
    #header_booking_form_container .ui.form input[type=file],
    #header_booking_form_container .ui.form input[type=number],
    #header_booking_form_container .ui.form input[type=password],
    #header_booking_form_container .ui.form input[type=search],
    #header_booking_form_container .ui.form input[type=tel],
    #header_booking_form_container .ui.form input[type=text],
    #header_booking_form_container .ui.form input[type=time],
    #header_booking_form_container .ui.form input[type=url],
    #header_booking_form_container .ui.selection.dropdown {
        border: none;
        background: none;
        border-radius: 0;
        height: 50px;
        border-bottom: 1px solid var(--accent-color);
    }

    #header_booking_form_container .ui.form input:not([type]):focus,
    #header_booking_form_container .ui.form input[type=date]:focus,
    #header_booking_form_container .ui.form input[type=datetime-local]:focus,
    #header_booking_form_container .ui.form input[type=email]:focus,
    #header_booking_form_container .ui.form input[type=file]:focus,
    #header_booking_form_container .ui.form input[type=number]:focus,
    #header_booking_form_container .ui.form input[type=password]:focus,
    #header_booking_form_container .ui.form input[type=search]:focus,
    #header_booking_form_container .ui.form input[type=tel]:focus,
    #header_booking_form_container .ui.form input[type=text]:focus,
    #header_booking_form_container .ui.form input[type=time]:focus,
    #header_booking_form_container .ui.form input[type=url]:focus,
    #header_booking_form_container .ui.selection.dropdown.active.visible {
        border-radius: 0;
        border-bottom: 1px solid var(--accent-color);
    }

    #header_booking_form_container .ui.selection.dropdown.active.visible {
        background: #fff;
        border-top: 1px solid var(--accent-color);
        border-right: 1px solid var(--accent-color);
        border-left: 1px solid var(--accent-color);
    }


    #header_booking_form_container .ui.form .field {
        position: relative;
    }

    #header_booking_form_container .ui.form .field label {
        /*         color: #959595; */
        text-transform: uppercase;
        font-size: 0.75em;
        letter-spacing: 0.04em;
        font-weight: 400;
    }

    #header_booking_form_container .ui.form .fields .field label {
        left: calc(10px + 0.5em);
    }

    #header_booking_form_container .ui.icon.input>i.icon {
        /*         color: #cfb53b; */
        /*         height: calc(100% - 30px);
        top: 30px; */
        opacity: 0.2;
    }

    #header_booking_form_container .ui.selection.visible.dropdown>.text:not(.default) {
        color: inherit;
    }

    #header_booking_form_container .ui.selection.dropdown>.delete.icon,
    #header_booking_form_container .ui.selection.dropdown>.dropdown.icon,
    #header_booking_form_container .ui.selection.dropdown>.search.icon {
        top: auto;
    }

    #header_booking_form_container .ui.submit.button {
        border-radius: 0;
    }

    /* Form element UI */

    #header_booking_form_content {
        -webkit-transition: opacity 300ms;
        -o-transition: opacity 300ms;
        transition: opacity 300ms;
    }

    #header_booking_form_content .ui.grid button.primary {
        background-color: var(--accent-color);
        font-weight: 400;
        margin: 1em 0 0 !important;
        padding-top: 1.5em;
        padding-bottom: 1.5em;
    }

    #header_booking_form_content .ui.grid button.primary:hover,
    #header_booking_form_content .ui.grid button.primary:active {
        background-color: #EEAB3E;
    }

    #header_booking_form_content[v-cloak] {
        opacity: 0;
    }

    .vhd__datepicker {
        font-family: inherit;
    }

    .vhd__datepicker__month-button.vhd__datepicker__month-button {
        color: var(--accent-color);
        border-color: transparent;
        background-color: transparent;
    }


    .vhd__datepicker__month-button.vhd__datepicker__month-button:hover,
    .vhd__datepicker__month-button.vhd__datepicker__month-button:focus,
    .vhd__datepicker__month-button.vhd__datepicker__month-button:active {
        background-color: transparent;
    }

    .vhd__datepicker__month-day--today .vhd__datepicker__month-day-wrapper {
        border: 2px solid var(--accent-color);
        padding-top: calc(100% - 5px);
    }

    .vhd__datepicker__wrapper--grid .vhd__square .vhd__datepicker__month-day {
        border-color: transparent;
    }

    .vhd__datepicker__month-day--selected {
        border-color: var(--accent-color);
        background-color: rgba(228, 164, 62, .7);
        color: #fff;
    }

    .vhd__datepicker__month-day--first-day-selected,
    .vhd__datepicker__month-day--last-day-selected {
        border-color: var(--accent-color);
        background-color: var(--accent-color);
        color: #fff;
        cursor: pointer;
        font-weight: 700;
        pointer-events: auto;
    }

    .vhd__datepicker__wrapper--grid .vhd__square .vhd__datepicker__month-day:hover {
        border-color: var(--accent-color);
        background-color: var(--accent-color);
        color: #fff;
    }

    .vhd__datepicker__month-name {
        font-weight: 600;
        height: 4em;
        line-height: 2.5em;
    }

    .vhd__datepicker__month-day--valid {
        font-weight: normal;
    }

    .vhd__datepicker__tooltip {
        padding: 0.45em 0.91em;
    }

    .vhd__datepicker__month-day--disabled span {
        text-decoration: none;
    }

    @media screen and (max-width: 767px) {
        .vhd__datepicker__week-row {
            box-shadow: none;
        }

        .vhd__datepicker__month-name {
            margin-top: 0;
            position: static;
            padding-top: 0;
        }

        .vhd__datepicker__month:last-of-type {
            margin-bottom: 0;
        }

        #header_booking_form_content>.ui.stackable.grid>.column {
            padding-left: 0;
            padding-right: 0;
        }
    }
</style>
<script type="text/javascript">
    document.addEventListener("DOMContentLoaded", (event) => {
        (function($) {
            window.vue_header_booking_form = new Vue({
                el: "#header_booking_form_content",
                components: {
                    "HotelDatePicker": vueHotelDatepicker.default
                },
                directives: {
                    uppercase: {
                        update(el, binding, vnode) {
                            el.value = el.value.toUpperCase();
                            el.dispatchEvent(new Event("input"));
                        }
                    }
                },
                data() {
                    return {
                        alternate_checkin: "",
                        alternate_checkout: "",
                        adult: 1,
                        child: 0,
                        specialcode: "",
                        property: "<?php echo $default_property; ?>",
                        datepicker: {
                            max_night: 0,
                            start_date: new Date(),
                            end_date: Infinity,
                            single_month: (window.innerWidth <= 1200)
                        }
                    };
                },
                mounted() {
                    $(this.$el).find("select.dropdown").dropdown({
                        onShow: function() {
                            if (parent) {
                                parent.postMessage({
                                    "type": "script",
                                    "data": (function() {
                                        jQuery("#portal_frame").addClass("has-dropdown");
                                    }).toString()
                                }, "*");
                            }
                        },
                        onHide: function() {
                            if (parent) {
                                parent.postMessage({
                                    "type": "script",
                                    "data": (function() {
                                        jQuery("#portal_frame").removeClass("has-dropdown");
                                    }).toString()
                                }, "*");
                            }
                        }
                    });

                    window.addEventListener("resize", this.handleWindowResize);
                    this.calibrateDatepickerMonth();
                },
                beforeDestroy() {
                    window.removeEventListener("resize", this.handleWindowResize);
                },
                methods: {
                    changeCheckin(checkin_date) {
                        if (checkin_date) {
                            this.alternate_checkin = moment(checkin_date).format("YYYY-MM-DD");
                        } else {
                            this.alternate_checkin = "";
                        }
                    },
                    changeCheckout(checkout_date) {
                        if (checkout_date) {
                            this.alternate_checkout = moment(checkout_date).format("YYYY-MM-DD");
                        } else {
                            this.alternate_checkout = "";
                        }
                    },
                    calibrateDatepickerMonth() {
                        this.datepicker.single_month = (window.innerWidth <= 1200);
                    },
                    handleWindowResize: _.debounce(function() {
                        this.calibrateDatepickerMonth();
                    }, 100)
                }
            });
        })(jQuery);
    });
</script>
<div id="header_booking_form_container" class="ui fluid container">
    <div id="header_booking_form_content" class="ui form" v-cloak>
        <input name="property" type="hidden" value="<?php echo esc_attr($default_property); ?>" />
        <input type="hidden" name="alternate_checkin" v-model="alternate_checkin" required />
        <input type="hidden" name="alternate_checkout" v-model="alternate_checkout" required />
        <div class="ui stackable two column grid">
            <div class="column">
                <div class="ui one column padded grid">
                    <div class="row">
                        <div class="column">
                            <div class="field">
                                <label for="header_daterange_dateinput"><strong>Stay Date</strong></label>
                                <hotel-date-picker ref="datepicker" format="DD MMM YYYY" :min-nights="0" :max-nights="datepicker.max_night" :start-date="datepicker.start_date" :end-date="datepicker.end_date" :show-single-month="datepicker.single_month" @check-in-changed="changeCheckin" @check-out-changed="changeCheckout" show-year always-visible />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="ui one column padded grid">
                    <div class="two column row">
                        <div class="column">
                            <div class="field">
                                <label for="header_adult_input"><strong>Adults</strong></label>
                                <select id="header_adult_input" name="adult" class="dropdown" v-model="adult" required>
                                    <option v-for="n in <?php echo $params['max_adult']; ?>" :value="n">{{n}}</option>
                                </select>
                            </div>
                        </div>
                        <div class="column">
                            <div class="field" style="z-index: 1;">
                                <label for="header_child_input"><strong>Children</strong></label>
                                <select id="header_child_input" name="child" class="dropdown" v-model="child" required>
                                    <option value="0">0</option>
                                    <option v-for="n in <?php echo $params['max_children']; ?>" :value="n">{{n}}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="field" style="z-index: 0;">
                            <label for="header_promocode_input"><strong>Promo Code</strong></label>
                            <input id="header_promocode_input" type="text" name="specialcode" v-model="specialcode" v-uppercase />
                        </div>
                    </div>
                    <div class="column">
                        <button class="fluid ui primary submit tiny button" type="submit">CHECK AVAILABILITY</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>