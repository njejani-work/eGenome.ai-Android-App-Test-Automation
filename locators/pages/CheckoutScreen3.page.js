// AUTO-GENERATED from locators/CheckoutScreen3.json by scripts/locator-capture.
// Do not edit: it is regenerated on every capture. Extend this class for actions, e.g.
//   class Login extends CheckoutScreen3Class { async login(phone) { ... } }
// Screen: (no title) | activity: com.razorpay.CheckoutActivity | updated: 2026-10-28T08:20:43.145Z
import BasePage from './BasePage.js';

const L = {
  razorpayCheckoutView: ["android=new UiSelector().text(\"Razorpay Checkout\")", "//android.webkit.WebView[@text=\"Razorpay Checkout\"]"],
  razorpayCheckoutV2ContainerView: ["id=razorpay-checkout-v2-container", "//android.view.View[@resource-id=\"razorpay-checkout-v2-container\"]"],
  scrollContainerView: ["id=scroll-container", "//android.view.View[@resource-id=\"scroll-container\"]"],
  merchantIdentityView: ["id=merchant-identity", "//android.view.View[@resource-id=\"merchant-identity\"]"],
  goBackBtn: ["android=new UiSelector().text(\"Go back\")", "//android.widget.Button[@text=\"Go back\"]"],
  logoImage: ["~Logo", "android=new UiSelector().text(\"QofVAmQHuPXfwt_medium\")", "//android.widget.Image[@content-desc=\"Logo\" and @text=\"QofVAmQHuPXfwt_medium\"]"],
  annualPlanText: ["android=new UiSelector().text(\"Annual Plan\")", "//android.widget.TextView[@text=\"Annual Plan\"]"],
  btn: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.webkit.WebView[1]/android.webkit.WebView[1]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View[2]/android.widget.Button[1]"],
  totalAmountText: ["android=new UiSelector().text(\"Total Amount\")", "//android.widget.TextView[@text=\"Total Amount\"]"],
  el9999Text: ["android=new UiSelector().text(\"₹9,999\")", "//android.widget.TextView[@text=\"₹9,999\"]"],
  notificationLogoImage: ["~notification-logo", "android=new UiSelector().text(\"AMEX\")", "//android.widget.Image[@content-desc=\"notification-logo\" and @text=\"AMEX\"]"],
  yourAmexCardIsText: ["android=new UiSelector().text(\"Your Amex card is welcomed at 1M+ locations\")", "//android.widget.TextView[@text=\"Your Amex card is welcomed at 1M+ locations\"]"],
  popThemeWrapperView: ["id=pop-theme-wrapper", "//android.view.View[@resource-id=\"pop-theme-wrapper\"]"],
  mainContainerView: ["id=main-container", "//android.view.View[@resource-id=\"main-container\"]"],
  mainStackContainerView: ["id=main-stack-container", "//android.view.View[@resource-id=\"main-stack-container\"]"],
  contactDetailsText: ["android=new UiSelector().text(\"Contact details\")", "//android.widget.TextView[@text=\"Contact details\"]"],
  enterMobileNumberToText: ["android=new UiSelector().text(\"Enter mobile number to continue\")", "//android.widget.TextView[@text=\"Enter mobile number to continue\"]"],
  mobileNumberBtn: ["android=new UiSelector().text(\"Mobile number\")", "//android.widget.Button[@text=\"Mobile number\"]"],
  mobileNumberInput: ["//android.widget.EditText[@hint=\"Mobile number\"]"],
  accountStripView: ["id=account-strip", "//android.view.View[@resource-id=\"account-strip\"]"],
  securedByText: ["android=new UiSelector().text(\"Secured by\")", "//android.widget.TextView[@text=\"Secured by\"]"],
  razorpayText: ["android=new UiSelector().text(\"Razorpay\")", "//android.widget.TextView[@text=\"Razorpay\"]"],
  text: ["(//android.widget.TextView[@text=\"•\"])[1]", "android=new UiSelector().text(\"•\")"],
  accountTermsBtn: ["android=new UiSelector().text(\"Account & Terms\")", "//android.widget.Button[@text=\"Account & Terms\"]"],
  text2: ["(//android.widget.TextView[@text=\"•\"])[2]", "android=new UiSelector().text(\"•\")"],
  aboutEpigenomeAiFuBtn: ["android=new UiSelector().text(\"About EPIGENOME.AI FU…\")", "//android.widget.Button[@text=\"About EPIGENOME.AI FU…\"]"],
  bottomContainerView: ["id=bottom-container", "//android.view.View[@resource-id=\"bottom-container\"]"],
  contactSubmitView: ["id=contact-submit", "//android.view.View[@resource-id=\"contact-submit\"]"],
  continueBtn: ["android=new UiSelector().text(\"Continue\")", "//android.widget.Button[@text=\"Continue\"]"],
  byProceedingIAgreeText: ["android=new UiSelector().text(\"By proceeding, I agree to Razorpay’s \")", "//android.widget.TextView[@text=\"By proceeding, I agree to Razorpay’s \"]"],
  privacyNoticeBtn: ["~Privacy Notice", "//android.widget.Button[@content-desc=\"Privacy Notice\"]"],
  editPreferencesBtn: ["~Edit Preferences", "//android.widget.Button[@content-desc=\"Edit Preferences\"]"],
  overlayBackdropView: ["id=overlay-backdrop", "//android.view.View[@resource-id=\"overlay-backdrop\"]"],
  btn2: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.webkit.WebView[1]/android.webkit.WebView[1]/android.view.View[1]/android.view.View[1]/android.view.View[2]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.widget.Button[1]"],
  areYouSureYouText: ["android=new UiSelector().text(\"Are you sure you want to exit?\")", "//android.widget.TextView[@text=\"Are you sure you want to exit?\"]"],
  youWillBeTakenText: ["android=new UiSelector().text(\"You will be taken back to Annual Plan app\")", "//android.widget.TextView[@text=\"You will be taken back to Annual Plan app\"]"],
  continueToPaymentBtn: ["android=new UiSelector().text(\"Continue to payment\")", "//android.widget.Button[@text=\"Continue to payment\"]"],
  yesExitBtn: ["android=new UiSelector().text(\"Yes, exit\")", "//android.widget.Button[@text=\"Yes, exit\"]"],
  mainStackContainerText: ["id=main-stack-container", "//android.widget.TextView[@resource-id=\"main-stack-container\"]"],
};

class CheckoutScreen3 extends BasePage {
  constructor() {
    super(L, ["privacyNoticeBtn","editPreferencesBtn","razorpayCheckoutV2ContainerView"]);
  }

  /** WebView "Razorpay Checkout" */
  get razorpayCheckoutView() {
    return $(L.razorpayCheckoutView[0]);
  }

  /** View */
  get razorpayCheckoutV2ContainerView() {
    return $(L.razorpayCheckoutV2ContainerView[0]);
  }

  /** View */
  get scrollContainerView() {
    return $(L.scrollContainerView[0]);
  }

  /** View */
  get merchantIdentityView() {
    return $(L.merchantIdentityView[0]);
  }

  /** Button "Go back" */
  get goBackBtn() {
    return $(L.goBackBtn[0]);
  }

  /** Image "QofVAmQHuPXfwt_medium" */
  get logoImage() {
    return $(L.logoImage[0]);
  }

  /** TextView "Annual Plan" */
  get annualPlanText() {
    return $(L.annualPlanText[0]);
  }

  /** Button */
  get btn() {
    return $(L.btn[0]);
  }

  /** TextView "Total Amount" */
  get totalAmountText() {
    return $(L.totalAmountText[0]);
  }

  /** TextView "₹9,999" */
  get el9999Text() {
    return $(L.el9999Text[0]);
  }

  /** Image "AMEX" */
  get notificationLogoImage() {
    return $(L.notificationLogoImage[0]);
  }

  /** TextView "Your Amex card is welcomed at 1M+ locati" */
  get yourAmexCardIsText() {
    return $(L.yourAmexCardIsText[0]);
  }

  /** View */
  get popThemeWrapperView() {
    return $(L.popThemeWrapperView[0]);
  }

  /** View */
  get mainContainerView() {
    return $(L.mainContainerView[0]);
  }

  /** View */
  get mainStackContainerView() {
    return $(L.mainStackContainerView[0]);
  }

  /** TextView "Contact details" */
  get contactDetailsText() {
    return $(L.contactDetailsText[0]);
  }

  /** TextView "Enter mobile number to continue" */
  get enterMobileNumberToText() {
    return $(L.enterMobileNumberToText[0]);
  }

  /** Button "Mobile number" */
  get mobileNumberBtn() {
    return $(L.mobileNumberBtn[0]);
  }

  /** EditText */
  get mobileNumberInput() {
    return $(L.mobileNumberInput[0]);
  }

  /** View */
  get accountStripView() {
    return $(L.accountStripView[0]);
  }

  /** TextView "Secured by" */
  get securedByText() {
    return $(L.securedByText[0]);
  }

  /** TextView "Razorpay" */
  get razorpayText() {
    return $(L.razorpayText[0]);
  }

  /** TextView "•" */
  get text() {
    return $(L.text[0]);
  }

  /** Button "Account & Terms" */
  get accountTermsBtn() {
    return $(L.accountTermsBtn[0]);
  }

  /** TextView "•" */
  get text2() {
    return $(L.text2[0]);
  }

  /** Button "About EPIGENOME.AI FU…" */
  get aboutEpigenomeAiFuBtn() {
    return $(L.aboutEpigenomeAiFuBtn[0]);
  }

  /** View */
  get bottomContainerView() {
    return $(L.bottomContainerView[0]);
  }

  /** View */
  get contactSubmitView() {
    return $(L.contactSubmitView[0]);
  }

  /** Button "Continue" */
  get continueBtn() {
    return $(L.continueBtn[0]);
  }

  /** TextView "By proceeding, I agree to Razorpay’s " */
  get byProceedingIAgreeText() {
    return $(L.byProceedingIAgreeText[0]);
  }

  /** Button */
  get privacyNoticeBtn() {
    return $(L.privacyNoticeBtn[0]);
  }

  /** Button */
  get editPreferencesBtn() {
    return $(L.editPreferencesBtn[0]);
  }

  /** View */
  get overlayBackdropView() {
    return $(L.overlayBackdropView[0]);
  }

  /** Button */
  get btn2() {
    return $(L.btn2[0]);
  }

  /** TextView "Are you sure you want to exit?" */
  get areYouSureYouText() {
    return $(L.areYouSureYouText[0]);
  }

  /** TextView "You will be taken back to Annual Plan ap" */
  get youWillBeTakenText() {
    return $(L.youWillBeTakenText[0]);
  }

  /** Button "Continue to payment" */
  get continueToPaymentBtn() {
    return $(L.continueToPaymentBtn[0]);
  }

  /** Button "Yes, exit" */
  get yesExitBtn() {
    return $(L.yesExitBtn[0]);
  }

  /** TextView */
  get mainStackContainerText() {
    return $(L.mainStackContainerText[0]);
  }
}

export { CheckoutScreen3 as CheckoutScreen3Class, L as CheckoutScreen3Locators };
export default new CheckoutScreen3();
