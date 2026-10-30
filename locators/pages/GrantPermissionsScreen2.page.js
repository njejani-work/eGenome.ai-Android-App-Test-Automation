// AUTO-GENERATED from locators/GrantPermissionsScreen2.json by scripts/locator-capture.
// Do not edit: it is regenerated on every capture. Extend this class for actions, e.g.
//   class Login extends GrantPermissionsScreen2Class { async login(phone) { ... } }
// Screen: (no title) | activity: com.android.permissioncontroller.permission.ui.GrantPermissionsActivity | updated: 2026-10-28T07:52:51.958Z
import BasePage from './BasePage.js';

const L = {
  grantSingletonBtn: ["id=com.android.permissioncontroller:id/grant_singleton", "//android.widget.LinearLayout[@resource-id=\"com.android.permissioncontroller:id/grant_singleton\"]"],
  grantDialogBtn: ["id=com.android.permissioncontroller:id/grant_dialog", "//android.widget.LinearLayout[@resource-id=\"com.android.permissioncontroller:id/grant_dialog\"]"],
  contentContainerView: ["id=com.android.permissioncontroller:id/content_container", "//android.widget.LinearLayout[@resource-id=\"com.android.permissioncontroller:id/content_container\"]"],
  permissionIconImage: ["id=com.android.permissioncontroller:id/permission_icon", "//android.widget.ImageView[@resource-id=\"com.android.permissioncontroller:id/permission_icon\"]"],
  permissionMessageText: ["id=com.android.permissioncontroller:id/permission_message", "android=new UiSelector().text(\"Allow eGenome to access this device’s location?\")", "//android.widget.TextView[@resource-id=\"com.android.permissioncontroller:id/permission_message\" and @text=\"Allow eGenome to access this device’s location?\"]"],
  permissionLocationAccuracyView: ["id=com.android.permissioncontroller:id/permission_location_accuracy", "//android.widget.FrameLayout[@resource-id=\"com.android.permissioncontroller:id/permission_location_accuracy\"]"],
  permissionLocationAccuracyRadioContainerList: ["id=com.android.permissioncontroller:id/permission_location_accuracy_radio_container", "//android.widget.HorizontalScrollView[@resource-id=\"com.android.permissioncontroller:id/permission_location_accuracy_radio_container\"]"],
  permissionLocationAccuracyRadioGroupView: ["id=com.android.permissioncontroller:id/permission_location_accuracy_radio_group", "//android.widget.RadioGroup[@resource-id=\"com.android.permissioncontroller:id/permission_location_accuracy_radio_group\"]"],
  permissionLocationAccuracyRadioFineRadio: ["id=com.android.permissioncontroller:id/permission_location_accuracy_radio_fine", "android=new UiSelector().text(\"Precise\")", "//android.widget.RadioButton[@resource-id=\"com.android.permissioncontroller:id/permission_location_accuracy_radio_fine\" and @text=\"Precise\"]"],
  permissionLocationAccuracyRadioCoarseRadio: ["id=com.android.permissioncontroller:id/permission_location_accuracy_radio_coarse", "android=new UiSelector().text(\"Approximate\")", "//android.widget.RadioButton[@resource-id=\"com.android.permissioncontroller:id/permission_location_accuracy_radio_coarse\" and @text=\"Approximate\"]"],
  permissionAllowForegroundOnlyBtn: ["id=com.android.permissioncontroller:id/permission_allow_foreground_only_button", "android=new UiSelector().text(\"While using the app\")", "//android.widget.Button[@resource-id=\"com.android.permissioncontroller:id/permission_allow_foreground_only_button\" and @text=\"While using the app\"]"],
  permissionAllowOneTimeBtn: ["id=com.android.permissioncontroller:id/permission_allow_one_time_button", "android=new UiSelector().text(\"Only this time\")", "//android.widget.Button[@resource-id=\"com.android.permissioncontroller:id/permission_allow_one_time_button\" and @text=\"Only this time\"]"],
  permissionDenyBtn: ["id=com.android.permissioncontroller:id/permission_deny_button", "android=new UiSelector().text(\"Don’t allow\")", "//android.widget.Button[@resource-id=\"com.android.permissioncontroller:id/permission_deny_button\" and @text=\"Don’t allow\"]"],
};

class GrantPermissionsScreen2 extends BasePage {
  constructor() {
    super(L, ["permissionLocationAccuracyRadioFineRadio","permissionLocationAccuracyRadioCoarseRadio","permissionAllowForegroundOnlyBtn"]);
  }

  /** LinearLayout */
  get grantSingletonBtn() {
    return $(L.grantSingletonBtn[0]);
  }

  /** LinearLayout */
  get grantDialogBtn() {
    return $(L.grantDialogBtn[0]);
  }

  /** LinearLayout */
  get contentContainerView() {
    return $(L.contentContainerView[0]);
  }

  /** ImageView */
  get permissionIconImage() {
    return $(L.permissionIconImage[0]);
  }

  /** TextView "Allow eGenome to access this device’s lo" */
  get permissionMessageText() {
    return $(L.permissionMessageText[0]);
  }

  /** FrameLayout */
  get permissionLocationAccuracyView() {
    return $(L.permissionLocationAccuracyView[0]);
  }

  /** HorizontalScrollView */
  get permissionLocationAccuracyRadioContainerList() {
    return $(L.permissionLocationAccuracyRadioContainerList[0]);
  }

  /** RadioGroup */
  get permissionLocationAccuracyRadioGroupView() {
    return $(L.permissionLocationAccuracyRadioGroupView[0]);
  }

  /** RadioButton "Precise" */
  get permissionLocationAccuracyRadioFineRadio() {
    return $(L.permissionLocationAccuracyRadioFineRadio[0]);
  }

  /** RadioButton "Approximate" */
  get permissionLocationAccuracyRadioCoarseRadio() {
    return $(L.permissionLocationAccuracyRadioCoarseRadio[0]);
  }

  /** Button "While using the app" */
  get permissionAllowForegroundOnlyBtn() {
    return $(L.permissionAllowForegroundOnlyBtn[0]);
  }

  /** Button "Only this time" */
  get permissionAllowOneTimeBtn() {
    return $(L.permissionAllowOneTimeBtn[0]);
  }

  /** Button "Don’t allow" */
  get permissionDenyBtn() {
    return $(L.permissionDenyBtn[0]);
  }
}

export { GrantPermissionsScreen2 as GrantPermissionsScreen2Class, L as GrantPermissionsScreen2Locators };
export default new GrantPermissionsScreen2();
