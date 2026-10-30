// AUTO-GENERATED from locators/GrantPermissionsScreen.json by scripts/locator-capture.
// Do not edit: it is regenerated on every capture. Extend this class for actions, e.g.
//   class Login extends GrantPermissionsScreenClass { async login(phone) { ... } }
// Screen: (no title) | activity: com.android.permissioncontroller.permission.ui.GrantPermissionsActivity | updated: 2026-10-28T07:40:24.747Z
import BasePage from './BasePage.js';

const L = {
  grantSingletonBtn: ["id=com.android.permissioncontroller:id/grant_singleton", "//android.widget.LinearLayout[@resource-id=\"com.android.permissioncontroller:id/grant_singleton\"]"],
  grantDialogBtn: ["id=com.android.permissioncontroller:id/grant_dialog", "//android.widget.LinearLayout[@resource-id=\"com.android.permissioncontroller:id/grant_dialog\"]"],
  contentContainerView: ["id=com.android.permissioncontroller:id/content_container", "//android.widget.LinearLayout[@resource-id=\"com.android.permissioncontroller:id/content_container\"]"],
  permissionIconImage: ["id=com.android.permissioncontroller:id/permission_icon", "//android.widget.ImageView[@resource-id=\"com.android.permissioncontroller:id/permission_icon\"]"],
  permissionMessageText: ["id=com.android.permissioncontroller:id/permission_message", "android=new UiSelector().text(\"Allow eGenome to send you notifications?\")", "//android.widget.TextView[@resource-id=\"com.android.permissioncontroller:id/permission_message\" and @text=\"Allow eGenome to send you notifications?\"]"],
  permissionAllowBtn: ["id=com.android.permissioncontroller:id/permission_allow_button", "android=new UiSelector().text(\"Allow\")", "//android.widget.Button[@resource-id=\"com.android.permissioncontroller:id/permission_allow_button\" and @text=\"Allow\"]"],
  permissionDenyAndDontAskAgainBtn: ["id=com.android.permissioncontroller:id/permission_deny_and_dont_ask_again_button", "android=new UiSelector().text(\"Don’t allow\")", "//android.widget.Button[@resource-id=\"com.android.permissioncontroller:id/permission_deny_and_dont_ask_again_button\" and @text=\"Don’t allow\"]"],
};

class GrantPermissionsScreen extends BasePage {
  constructor() {
    super(L, ["permissionAllowBtn","permissionDenyAndDontAskAgainBtn"]);
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

  /** TextView "Allow eGenome to send you notifications?" */
  get permissionMessageText() {
    return $(L.permissionMessageText[0]);
  }

  /** Button "Allow" */
  get permissionAllowBtn() {
    return $(L.permissionAllowBtn[0]);
  }

  /** Button "Don’t allow" */
  get permissionDenyAndDontAskAgainBtn() {
    return $(L.permissionDenyAndDontAskAgainBtn[0]);
  }
}

export { GrantPermissionsScreen as GrantPermissionsScreenClass, L as GrantPermissionsScreenLocators };
export default new GrantPermissionsScreen();
