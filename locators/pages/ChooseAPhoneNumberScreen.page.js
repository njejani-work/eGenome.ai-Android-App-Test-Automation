// AUTO-GENERATED from locators/ChooseAPhoneNumberScreen.json by scripts/locator-capture.
// Do not edit: it is regenerated on every capture. Extend this class for actions, e.g.
//   class Login extends ChooseAPhoneNumberScreenClass { async login(phone) { ... } }
// Screen: Choose a phone number | activity: .auth.api.credentials.assistedsignin.ui.PhoneNumberHintActivity | updated: 2026-10-28T08:41:13.737Z
import BasePage from './BasePage.js';

const L = {
  actionBarRootView: ["id=com.google.android.gms:id/action_bar_root", "//android.widget.FrameLayout[@resource-id=\"com.google.android.gms:id/action_bar_root\"]"],
  containerView: ["id=com.google.android.gms:id/container", "//android.widget.FrameLayout[@resource-id=\"com.google.android.gms:id/container\"]"],
  coordinatorView: ["id=com.google.android.gms:id/coordinator", "//android.view.ViewGroup[@resource-id=\"com.google.android.gms:id/coordinator\"]"],
  touchOutsideBtn: ["id=com.google.android.gms:id/touch_outside", "//android.view.View[@resource-id=\"com.google.android.gms:id/touch_outside\"]"],
  designBottomSheetView: ["id=com.google.android.gms:id/design_bottom_sheet", "//android.widget.FrameLayout[@resource-id=\"com.google.android.gms:id/design_bottom_sheet\"]"],
  headerWithLogoView: ["id=com.google.android.gms:id/header_with_logo", "//android.widget.LinearLayout[@resource-id=\"com.google.android.gms:id/header_with_logo\"]"],
  headerIconImage: ["id=com.google.android.gms:id/header_icon", "//android.widget.ImageView[@resource-id=\"com.google.android.gms:id/header_icon\"]"],
  cancelBtn: ["~Cancel", "id=com.google.android.gms:id/cancel", "//android.widget.ImageView[@resource-id=\"com.google.android.gms:id/cancel\" and @content-desc=\"Cancel\"]"],
  scrollContentView: ["id=com.google.android.gms:id/scroll_view_content", "//android.widget.LinearLayout[@resource-id=\"com.google.android.gms:id/scroll_view_content\"]"],
  titleText: ["id=com.google.android.gms:id/title", "android=new UiSelector().text(\"Choose a phone number\")", "//android.widget.TextView[@resource-id=\"com.google.android.gms:id/title\" and @text=\"Choose a phone number\"]"],
  consentText: ["id=com.google.android.gms:id/consent", "//android.widget.TextView[@resource-id=\"com.google.android.gms:id/consent\"]"],
  descriptionText: ["id=com.google.android.gms:id/description", "//android.widget.TextView[@resource-id=\"com.google.android.gms:id/description\"]"],
  phoneNumberList: ["id=com.google.android.gms:id/phone_number_list", "//android.support.v7.widget.RecyclerView[@resource-id=\"com.google.android.gms:id/phone_number_list\"]"],
  phoneNumberListItemBtn: ["id=com.google.android.gms:id/phone_number_list_item", "//android.widget.LinearLayout[@resource-id=\"com.google.android.gms:id/phone_number_list_item\"]"],
  phoneIconImage: ["id=com.google.android.gms:id/phone_icon", "//android.widget.ImageView[@resource-id=\"com.google.android.gms:id/phone_icon\"]"],
  phoneNumberText: ["id=com.google.android.gms:id/phone_number", "android=new UiSelector().text(\"(555) 123-4567\")", "//android.widget.TextView[@resource-id=\"com.google.android.gms:id/phone_number\" and @text=\"(555) 123-4567\"]"],
  bottomText: ["id=com.google.android.gms:id/bottom_text", "//android.widget.TextView[@resource-id=\"com.google.android.gms:id/bottom_text\"]"],
};

class ChooseAPhoneNumberScreen extends BasePage {
  constructor() {
    super(L, ["touchOutsideBtn","cancelBtn","coordinatorView"]);
  }

  /** FrameLayout */
  get actionBarRootView() {
    return $(L.actionBarRootView[0]);
  }

  /** FrameLayout */
  get containerView() {
    return $(L.containerView[0]);
  }

  /** ViewGroup */
  get coordinatorView() {
    return $(L.coordinatorView[0]);
  }

  /** View */
  get touchOutsideBtn() {
    return $(L.touchOutsideBtn[0]);
  }

  /** FrameLayout */
  get designBottomSheetView() {
    return $(L.designBottomSheetView[0]);
  }

  /** LinearLayout */
  get headerWithLogoView() {
    return $(L.headerWithLogoView[0]);
  }

  /** ImageView */
  get headerIconImage() {
    return $(L.headerIconImage[0]);
  }

  /** ImageView */
  get cancelBtn() {
    return $(L.cancelBtn[0]);
  }

  /** LinearLayout */
  get scrollContentView() {
    return $(L.scrollContentView[0]);
  }

  /** TextView "Choose a phone number" */
  get titleText() {
    return $(L.titleText[0]);
  }

  /** TextView "You can choose a phone number that's ass" */
  get consentText() {
    return $(L.consentText[0]);
  }

  /** TextView "Google won't store the phone number you " */
  get descriptionText() {
    return $(L.descriptionText[0]);
  }

  /** RecyclerView */
  get phoneNumberList() {
    return $(L.phoneNumberList[0]);
  }

  /** LinearLayout */
  get phoneNumberListItemBtn() {
    return $(L.phoneNumberListItemBtn[0]);
  }

  /** ImageView */
  get phoneIconImage() {
    return $(L.phoneIconImage[0]);
  }

  /** TextView "(555) 123-4567" */
  get phoneNumberText() {
    return $(L.phoneNumberText[0]);
  }

  /** TextView "You can update your phone number sharing" */
  get bottomText() {
    return $(L.bottomText[0]);
  }
}

export { ChooseAPhoneNumberScreen as ChooseAPhoneNumberScreenClass, L as ChooseAPhoneNumberScreenLocators };
export default new ChooseAPhoneNumberScreen();
