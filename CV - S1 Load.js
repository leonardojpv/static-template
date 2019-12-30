/**
 * @file This file contains the code loaded on entering Slide 1 for BTS - Client Vista
 * @author Leonardo J. Portillo V. | xs02917
 * E-mail {@link mailto:leonardo.portillo.contractor@bbva.com}
 * E-mail {@link mailto:leonardoportillo@gmail.com}
 * @copyright Atento Colombia - BBVA USA 2019
 */

/*** FUNCTIONAL ITEMS ***/

/* DEPRECATED var CB_reloader = $('#CB_reload_slide')[0]; */

/** Time in seconds to show success, warning and hint messages. */
var msg_time_secs = 4;

/*** END FUNCTIONAL ITEMS ***/

/*** SYSTEM FUNCTIONS ***/

/**
 * @description Requests confirmation from the user before closing or reloading the browser window or tab.
 */
window.onbeforeunload = function() {
  return "Are you sure you want to leave?";
};

/*** END SYSTEM FUNCTIONS */

/*** CV FUNCTIONS ***/

/**
 * Takes the entered username and password directly from the CP TEB variables, checks if they match an object in agents(), and if so, stores the agent's data in CP variables and returns 1. Otherwise, returns 0.
 * @function try_login
 * @returns {number} 1 if successful | 0 if unsuccesful
 */
function try_login() {
  var entered_username = window.cpAPIInterface.getVariableValue("TEB_username");
  var entered_password = window.cpAPIInterface.getVariableValue("TEB_password");
  for (const agent in agents) {
    var agent_inst = agents[agent];
    if (agent_inst.id == entered_username.toUpperCase()) {
      if (agent_inst.password == entered_password) {
        window.cpAPIInterface.setVariableValue(
          "BTS_env_agent_id",
          agent_inst.id.toUpperCase()
        );
        window.cpAPIInterface.setVariableValue(
          "BTS_env_agent_name",
          agent_inst.name
        );
        window.cpAPIInterface.setVariableValue(
          "BTS_env_agent_last_name",
          agent_inst.last_name
        );
        window.cpAPIInterface.setVariableValue(
          "BTS_env_agent_legal_id",
          agent_inst.legal_id
        );
        window.cpAPIInterface.setVariableValue(
          "BTS_env_agent_lob",
          agent_inst.lob
        );
        return 1;
      }
    }
  }
  return 0;
}

/**
 * Checks if the account number provided matches an object in chk_acc(), and if so, stores the checking account's data and returns 1. Otherwise, returns 0
 * @function load_chk_acc
 * @param {string} acc_number - The account number to look for and load from the chk_acc object, usually an input in a TEB
 * @returns {object} - An iterable object containing all the account info
 */
function load_chk_acc(acc_number) {
  for (const account_id in chk_acc) {
    if (chk_acc[account_id].number == acc_number) {
      window.cpAPIInterface.setVariableValue(
        "BTS_chk_acc_account_type",
        chk_acc[account_id].account_type
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_chk_acc_available_balance",
        chk_acc[account_id].available_balance
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_chk_acc_available_od",
        chk_acc[account_id].available_od
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_chk_acc_extended_status",
        chk_acc[account_id].extended_status
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_chk_acc_holder_1",
        chk_acc[account_id].holder_1
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_chk_acc_holder_2",
        chk_acc[account_id].holder_2
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_chk_acc_holder_3",
        chk_acc[account_id].holder_3
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_chk_acc_nsf_today",
        chk_acc[account_id].nsf_today
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_chk_acc_number",
        chk_acc[account_id].number
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_chk_acc_od_payoff_amount",
        chk_acc[account_id].payoff_amount
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_chk_acc_od_today",
        chk_acc[account_id].today
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_chk_acc_open_date",
        chk_acc[account_id].open_date
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_chk_acc_overdraft_protection",
        chk_acc[account_id].overdraft_protection
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_chk_acc_podl",
        chk_acc[account_id].podl
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_chk_acc_posted_balance",
        chk_acc[account_id].posted_balance
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_chk_acc_product_code",
        chk_acc[account_id].product_code
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_chk_acc_routing_number",
        chk_acc[account_id].routing_number
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_chk_acc_status",
        chk_acc[account_id].status
      );
      var cx_loaded = load_cx1(chk_acc[account_id].holder_1);
      return chk_acc[account_id];
    }
  }
  return 0;
}

/**
 * Checks if the SSN provided matches one in an object in cxs(), and if so, stores the cx's data and returns 1. Otherwise, returns 0
 * @function load_cx1
 * @param {string} ssn_tin - The SSN or TIN of the customer to look for and load from the cxs object
 * @returns {object} An iterable object containing all the account info
 */
function load_cx1(ssn_tin) {
  for (const cx_id in cxs) {
    if (cxs[cx_id].ssn_tin == ssn_tin) {
      window.cpAPIInterface.setVariableValue(
        "BTS_cx1_ssn_tin",
        cxs[cx_id].ssn_tin
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_cx1_client_number",
        cxs[cx_id].client_number
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_cx1_client_record_type",
        cxs[cx_id].client_record_type
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_cx1_client_name",
        cxs[cx_id].client_name
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_cx1_first_name",
        cxs[cx_id].first_name
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_cx1_last_name",
        cxs[cx_id].last_name
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_cx1_date_of_birth",
        cxs[cx_id].date_of_birth
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_cx1_cif_password",
        cxs[cx_id].cif_password
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_cx1_tax_id_number",
        cxs[cx_id].tax_id_number
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_cx1_drivers_license_alt_id",
        cxs[cx_id].drivers_license_alt_id
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_cx1_id_issue_date",
        cxs[cx_id].id_issue_date
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_cx1_id_exp_date",
        cxs[cx_id].id_exp_date
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_cx1_id_place_of_issuance",
        cxs[cx_id].id_place_of_issuance
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_cx1_customer_since",
        cxs[cx_id].customer_since
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_cx1_leg_addr_line_1",
        cxs[cx_id].leg_addr_line_1
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_cx1_leg_addr_line_2",
        cxs[cx_id].leg_addr_line_2
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_cx1_leg_addr_city",
        cxs[cx_id].leg_addr_city
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_cx1_leg_addr_state",
        cxs[cx_id].leg_addr_state
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_cx1_leg_addr_country",
        cxs[cx_id].leg_addr_country
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_cx1_leg_addr_zip_code",
        cxs[cx_id].leg_addr_zip_code
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_cx1_alt_addr_line_1",
        cxs[cx_id].alt_addr_line_1
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_cx1_alt_addr_line_2",
        cxs[cx_id].alt_addr_line_2
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_cx1_alt_addr_city",
        cxs[cx_id].alt_addr_city
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_cx1_alt_addr_state",
        cxs[cx_id].alt_addr_state
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_cx1_alt_addr_country",
        cxs[cx_id].alt_addr_country
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_cx1_alt_addr_zip_code",
        cxs[cx_id].alt_addr_zip_code
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_cx1_phone_number_1",
        cxs[cx_id].phone_number_1
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_cx1_phone_type_1",
        cxs[cx_id].phone_type_1
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_cx1_phone_number_2",
        cxs[cx_id].phone_number_2
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_cx1_phone_type_2",
        cxs[cx_id].phone_type_2
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_cx1_phone_number_3",
        cxs[cx_id].phone_number_3
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_cx1_phone_type_3",
        cxs[cx_id].phone_type_3
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_cx1_email_addr_1",
        cxs[cx_id].email_addr_1
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_cx1_email_type_1",
        cxs[cx_id].email_type_1
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_cx1_email_addr_2",
        cxs[cx_id].email_addr_2
      );
      window.cpAPIInterface.setVariableValue(
        "BTS_cx1_email_type_2",
        cxs[cx_id].email_type_2
      );
      return cxs[cx_id];
    }
  }
  return 0;
}

/**
 * Checks if the value in BTS_env_agent_id matches an agent ID in agents() and returns 1. Otherwise, returns 0
 * @function agent_logged_in
 * @returns {number} 1 if true | 0 if false
 */
function agent_logged_in() {
  var ag_id = window.cpAPIInterface.getVariableValue("BTS_env_agent_id");
  if (
    ag_id == "XS11234" ||
    ag_id == "XS21234" ||
    ag_id == "XS31234" ||
    ag_id == "XS41234" ||
    ag_id == "XS51234" ||
    ag_id == "XS61234"
  ) {
    return 1;
  } else {
    return 0;
  }
}

/**
 * Checks if the value in BTS_env_success_msg is not NULL, shows the message for msg_time_secs seconds on the current slide, and voids the message variable. It doesn't take any parameters or returns any value.
 * @function success_message
 */
function success_message() {
  if (
    window.cpAPIInterface.getVariableValue("BTS_env_success_msg") !=
    window.cpAPIInterface.getVariableValue("BTS_env_v_null")
  ) {
    cp.show("Group_s" + cpInfoCurrentSlide + "success_msg");
    setTimeout(function() {
      cp.hide("Group_s" + cpInfoCurrentSlide + "success_msg");
      window.cpAPIInterface.setVariableValue(
        "BTS_env_success_msg",
        window.cpAPIInterface.getVariableValue("BTS_env_v_null")
      );
    }, msg_time_secs * 1000);
  }
}

/**
 * Checks if the value in BTS_env_warning_msg is not NULL, shows the message for msg_time_secs seconds on the current slide, and voids the message variable. It doesn't take any parameters or returns any value.
 * @function warning_message
 */
function warning_message() {
  if (
    window.cpAPIInterface.getVariableValue("BTS_env_warning_msg") !=
    window.cpAPIInterface.getVariableValue("BTS_env_v_null")
  ) {
    cp.show("Group_s" + cpInfoCurrentSlide + "warning_msg");
    setTimeout(function() {
      cp.hide("Group_s" + cpInfoCurrentSlide + "warning_msg");
      window.cpAPIInterface.setVariableValue(
        "BTS_env_warning_msg",
        window.cpAPIInterface.getVariableValue("BTS_env_v_null")
      );
    }, msg_time_secs * 1000);
  }
}

/**
 * Checks if the value in BTS_env_hint_msg is not NULL, shows the message for msg_time_secs seconds on the current slide, and voids the message variable. It doesn't take any parameters or returns any value.
 * @function hint_message
 */
function hint_message() {
  if (
    window.cpAPIInterface.getVariableValue("BTS_env_hint_msg") !=
    window.cpAPIInterface.getVariableValue("BTS_env_v_null")
  ) {
    cp.show("Group_s" + cpInfoCurrentSlide + "hint_msg");
    setTimeout(function() {
      cp.hide("Group_s" + cpInfoCurrentSlide + "hint_msg");
      window.cpAPIInterface.setVariableValue(
        "BTS_env_hint_msg",
        window.cpAPIInterface.getVariableValue("BTS_env_v_null")
      );
    }, msg_time_secs * 1000);
  }
}

/**
 * Toggles the visibility of Group_sX_back_home on the current slide. It doesn't take any parameters or returns any value.
 * @function toggle_back_home
 */
function toggle_back_home() {
  let toggle = window.cpAPIInterface.getVariableValue(
    "BTS_env_back_home_toggle"
  );
  let current_slide = window.cpAPIInterface.getVariableValue(
    "cpInfoCurrentSlide"
  );
  if (toggle) {
    cp.hide("Group_s" + current_slide + "back_home");
    window.cpAPIInterface.setVariableValue("BTS_env_back_home_toggle", 0);
  } else {
    cp.show("Group_s" + current_slide + "back_home");
    window.cpAPIInterface.setVariableValue("BTS_env_back_home_toggle", 1);
  }
}

/**
 * Toggles the visibility of Group_sX_user_menu (logout) on the current slide. It doesn't take any parameters or returns any value.
 * @function toggle_user_menu
 */

function toggle_user_menu() {
  let toggle = window.cpAPIInterface.getVariableValue(
    "BTS_env_user_menu_toggle"
  );
  let current_slide = window.cpAPIInterface.getVariableValue(
    "cpInfoCurrentSlide"
  );
  if (toggle) {
    cp.hide("Group_s" + current_slide + "user_menu");
    window.cpAPIInterface.setVariableValue("BTS_env_user_menu_toggle", 0);
  } else {
    cp.show("Group_s" + current_slide + "user_menu");
    window.cpAPIInterface.setVariableValue("BTS_env_user_menu_toggle", 1);
  }
}

/**
 * Toggles the visibility of Group_sX_main_search dropdown menu on the current slide. It doesn't take any parameters or returns any value.
 * @function toggle_main_search
 */

function toggle_main_search() {
  let toggle = window.cpAPIInterface.getVariableValue(
    "BTS_env_main_search_toggle"
  );
  let current_slide = window.cpAPIInterface.getVariableValue(
    "cpInfoCurrentSlide"
  );
  if (toggle) {
    cp.hide("Group_s" + current_slide + "main_search");
    window.cpAPIInterface.setVariableValue("BTS_env_main_search_toggle", 0);
  } else {
    cp.show("Group_s" + current_slide + "main_search");
    window.cpAPIInterface.setVariableValue("BTS_env_main_search_toggle", 1);
  }
}

/**
 * Runs all necessary actions when a slide loads: saves the first frame of the slide, and shows any pending messages. It doesn't take any parameters or returns any value.
 * @function load_slide
 */
function load_slide() {
  window.cpAPIInterface.setVariableValue(
    "BTS_env_slide_first_frame",
    window.cpAPIInterface.getVariableValue("cpInfoCurrentFrame")
  );
  let current_slide = window.cpAPIInterface.getVariableValue(
    "cpInfoCurrentSlide"
  );
  cp.hide("Group_s" + current_slide + "_back_home");
  cp.show("Group_s" + current_slide + "_show_back_home");
  window.cpAPIInterface.setVariableValue("BTS_env_back_home_toggle", 0);
  cp.hide("Group_s" + current_slide + "_main_search");
  cp.show("Group_s" + current_slide + "_show_main_search");
  window.cpAPIInterface.setVariableValue("BTS_env_main_search_toggle", 0);
  cp.hide("Group_s" + current_slide + "_user_menu");
  cp.show("Group_s" + current_slide + "_show_user_menu");
  window.cpAPIInterface.setVariableValue("BTS_env_user_menu_toggle", 0);
  success_message();
  warning_message();
  hint_message();
}

/**
 * Reloads the current slide. It doesn't take any parameters or returns any value.
 * @function reload_slide
 */
function reload_slide() {
  window.cpAPIInterface.setVariableValue(
    "cpCmndGotoFrameAndResume",
    window.cpAPIInterface.getVariableValue("BTS_env_slide_first_frame") - 2
  );
}

/* Fires load_slide() automatically on every cpInfoCurrentSlide change*/
window.cpAPIEventEmitter.addEventListener(
  "CPAPI_VARIABLEVALUECHANGED",
  function() {
    load_slide();
  },
  "cpInfoCurrentSlide"
);

/* Focuses the corresponding TEB after showing main_search */
window.cpAPIEventEmitter.addEventListener(
  "CPAPI_VARIABLEVALUECHANGED",
  function() {
    var cb_s3 = $("#CB_s3_activate_search_cx")[0];
    cp.clickHandler(cb_s3);
  },
  "TEB_s3_search_cx"
);

/* Focuses the corresponding TEB after showing main_search */
window.cpAPIEventEmitter.addEventListener(
  "CPAPI_VARIABLEVALUECHANGED",
  function() {
    var cb_s4 = $("#CB_s4_activate_search_cx")[0];
    cp.clickHandler(cb_s4);
  },
  "TEB_s4_search_cx"
);

/* Focuses the corresponding TEB after showing main_search */
window.cpAPIEventEmitter.addEventListener(
  "CPAPI_VARIABLEVALUECHANGED",
  function() {
    var cb_s5 = $("#CB_s5_activate_search_cx")[0];
    cp.clickHandler(cb_s5);
  },
  "TEB_s5_search_cx"
);

/*** END CV FUNCTIONS ***/

/*** DATA OBJECTS ***/

/**
 * An iterable object that contains an iterable object per each agent instance.
 * @returns {object}
 */
var agents = {
  agent_1: {
    id: "XS11234",
    name: "AGENT1",
    last_name: "LASTNAME",
    legal_id: "1212121212",
    lob: "1",
    password: "bbva1"
  },
  agent_2: {
    id: "XS21234",
    name: "AGENT2",
    last_name: "LASTNAME",
    legal_id: "2121212121",
    lob: "2",
    password: "bbva2"
  },
  agent_3: {
    id: "XS31234",
    name: "AGENT3",
    last_name: "LASTNAME",
    legal_id: "1212121212",
    lob: "3",
    password: "bbva3"
  },
  agent_4: {
    id: "XS41234",
    name: "AGENT4",
    last_name: "LASTNAME",
    legal_id: "4141414141",
    lob: "1",
    password: "bbva4"
  },
  agent_5: {
    id: "XS51234",
    name: "AGENT5",
    last_name: "LASTNAME",
    legal_id: "5151515151",
    lob: "2",
    password: "bbva5"
  },
  agent_6: {
    id: "XS61234",
    name: "AGENT6",
    last_name: "LASTNAME",
    legal_id: "6161616161",
    lob: "3",
    password: "bbva6"
  }
};

/**
 * An iterable object that contains an iterable object per each LOB instance.
 * @returns {object}
 */
var lob = {
  lob_cs: { id: "1", name: "Customer Service", nickname: "CS" },
  lob_bc: { id: "2", name: "Bankcards", nickname: "BC" },
  lob_lcs: { id: "3", name: "Loan Customer  Service", nickname: "LCS" }
};

/**
 * An iterable object that contains an iterable object per each Customer instance.
 * @returns {object}
 */
var cxs = {
  cx_1: {
    ssn_tin: "123456789",
    client_number: "21234567",
    client_record_type: " Retail - Consumer",
    client_name: "JOHN M DOE",
    first_name: "JOHN",
    last_name: "DOE",
    date_of_birth: "01/17/1970",
    cif_password: "TOTTO/DOG",
    tax_id_number: "12121212",
    drivers_license_alt_id: "DRIVER'S LICENSE:U.S.ONLY",
    id_issue_date: "03/14/16",
    id_exp_date: "02/23/2022",
    id_place_of_issuance: "TEXAS",
    customer_since: "11/22/2016",
    leg_addr_line_1: "123 BAZINGA ST",
    leg_addr_line_2: "APT 201",
    leg_addr_city: "EL PASO",
    leg_addr_state: "TX-TEXAS",
    leg_addr_country: "UNITED STATES OF AMERICA (THE)",
    leg_addr_zip_code: "77077",
    alt_addr_line_1: "PO BOX 123",
    alt_addr_line_2: "",
    alt_addr_city: "HOUSTON",
    alt_addr_state: "TX-TEXAS",
    alt_addr_country: "UNITED STATES OF AMERICA (THE)",
    alt_addr_zip_code: "77123",
    phone_number_1: "5123456789",
    phone_type_1: "MOBILE PHONE",
    phone_number_2: "2024567890",
    phone_type_2: "HOME LANDLINE PHONE",
    phone_number_3: "",
    phone_type_3: "",
    email_addr_1: "JOHNNY_DOE@EMAIL.COM",
    email_type_1: "PRIMARY EMAIL",
    email_addr_2: "JOHN_DOE_2@EMAIL.COM",
    email_type_2: "ALTERNATE EMAIL"
  },
  cx_2: {
    ssn_tin: "223456789",
    client_number: "31234567",
    client_record_type: " Retail - Consumer",
    client_name: "JANE L DOE",
    first_name: "JANE",
    last_name: "DOE",
    date_of_birth: "02/20/1972",
    cif_password: "BOB123",
    tax_id_number: "20202020",
    drivers_license_alt_id: "DRIVER'S LICENSE:U.S.ONLY",
    id_issue_date: "10/22/17",
    id_exp_date: "07/15/2024",
    id_place_of_issuance: "ALABAMA",
    customer_since: "10/02/2009",
    leg_addr_line_1: "3456 YATZEE CIR",
    leg_addr_line_2: "",
    leg_addr_city: "BIRMINGHAM",
    leg_addr_state: "AL-ALABAMA",
    leg_addr_country: "UNITED STATES OF AMERICA (THE)",
    leg_addr_zip_code: "55123",
    alt_addr_line_1: "",
    alt_addr_line_2: "",
    alt_addr_city: "",
    alt_addr_state: "",
    alt_addr_country: "",
    alt_addr_zip_code: "",
    phone_number_1: "8129876543",
    phone_type_1: "MOBILE PHONE",
    phone_number_2: "5451012030",
    phone_type_2: "HOME LANDLINE PHONE",
    phone_number_3: "",
    phone_type_3: "",
    email_addr_1: "JANNIE_DOE@EMAIL.COM",
    email_type_1: "PRIMARY EMAIL",
    email_addr_2: "",
    email_type_2: ""
  }
};

/**
 * An iterable object that contains an iterable object per each Checking Account instance.
 * @returns {object}
 */
var chk_acc = {
  acc_1: {
    holder_1: "123456789",
    holder_2: "",
    holder_3: "",
    number: "6712345678",
    routing_number: "113010547",
    account_type: "AD",
    product_code: "02/0027 FREE CHECKING",
    status: "ACTIVE",
    extended_status: "NORMAL",
    open_date: "01/31/2018",
    available_balance: "582.36",
    posted_balance: "602.36",
    nsf_today: "N",
    od_today: "N",
    overdraft_protection: "Y",
    podl: "410.00",
    available_od: "0.00",
    od_payoff_amount: "0.00"
  },
  acc_2: {
    holder_1: "223456789",
    holder_2: "",
    holder_3: "",
    number: "6723456789",
    routing_number: "062001186",
    account_type: "AD",
    product_code: "02/0014 BUILD-TO-ORDER CHECKING",
    status: "ACTIVE",
    extended_status: "NORMAL",
    open_date: "09/30/2015",
    available_balance: "1820.60",
    posted_balance: "1820.60",
    nsf_today: "N",
    od_today: "N",
    overdraft_protection: "Y",
    podl: "410.00",
    available_od: "0.00",
    od_payoff_amount: "0.00"
  },
  acc_3: {
    holder_1: "",
    holder_2: "",
    holder_3: "",
    number: "",
    routing_number: "",
    joint_owners: "",
    account_type: "",
    product_code: "",
    status: "ACTIVE",
    extended_status: "NORMAL",
    open_date: "",
    available_balance: "",
    posted_balance: "",
    nsf_today: "N",
    od_today: "N",
    overdraft_protection: "Y",
    podl: "",
    available_od: "",
    od_payoff_amount: ""
  }
};

/**
 * An iterable object that contains an iterable object per each Transaction instance.
 * @returns {object}
 */
var txs = {
  tx_1: {
    id: "",
    account: "",
    date_time: "",
    posting_date: "",
    code: "",
    check_number: "",
    debit_credit: "",
    block_seq_number: "",
    description: "",
    amount: "",
    avail_amount: "",
    hold_amount: "",
    closing_bal: "",
    decisioning_bal: ""
  }
};

/*** END DATA OBJECTS ***/
