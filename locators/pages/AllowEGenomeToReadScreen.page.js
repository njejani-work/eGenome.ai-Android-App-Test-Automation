// AUTO-GENERATED from locators/AllowEGenomeToReadScreen.json by scripts/locator-capture.
// Do not edit: it is regenerated on every capture. Extend this class for actions, e.g.
//   class Login extends AllowEGenomeToReadScreenClass { async login(phone) { ... } }
// Screen: Allow “eGenome” to read | activity: com.android.healthconnect.controller.permissions.request.PermissionsActivity | updated: 2026-10-28T07:56:29.019Z
import BasePage from './BasePage.js';

const L = {
  actionBarRootView: ["id=com.android.healthconnect.controller:id/action_bar_root", "//android.widget.FrameLayout[@resource-id=\"com.android.healthconnect.controller:id/action_bar_root\"]"],
  containerView: ["id=com.android.healthconnect.controller:id/container", "//android.widget.FrameLayout[@resource-id=\"com.android.healthconnect.controller:id/container\"]"],
  coordinatorView: ["id=com.android.healthconnect.controller:id/coordinator", "//android.view.ViewGroup[@resource-id=\"com.android.healthconnect.controller:id/coordinator\"]"],
  touchOutsideBtn: ["id=com.android.healthconnect.controller:id/touch_outside", "//android.view.View[@resource-id=\"com.android.healthconnect.controller:id/touch_outside\"]"],
  designBottomSheetView: ["id=com.android.healthconnect.controller:id/design_bottom_sheet", "//android.widget.FrameLayout[@resource-id=\"com.android.healthconnect.controller:id/design_bottom_sheet\"]"],
  healthConnectBottomSheetView: ["id=com.android.healthconnect.controller:id/health_connect_bottom_sheet", "//android.widget.RelativeLayout[@resource-id=\"com.android.healthconnect.controller:id/health_connect_bottom_sheet\"]"],
  bottomSheetFragmentContainerView: ["id=com.android.healthconnect.controller:id/bottom_sheet_fragment_container", "//android.widget.FrameLayout[@resource-id=\"com.android.healthconnect.controller:id/bottom_sheet_fragment_container\"]"],
  setupContainerView: ["id=com.android.healthconnect.controller:id/setup_container", "//android.widget.RelativeLayout[@resource-id=\"com.android.healthconnect.controller:id/setup_container\"]"],
  preferenceContainerView: ["id=com.android.healthconnect.controller:id/preference_container", "//android.widget.FrameLayout[@resource-id=\"com.android.healthconnect.controller:id/preference_container\"]"],
  prefContainerView: ["id=com.android.healthconnect.controller:id/pref_container", "//android.widget.FrameLayout[@resource-id=\"com.android.healthconnect.controller:id/pref_container\"]"],
  listContainerView: ["id=android:id/list_container", "//android.widget.FrameLayout[@resource-id=\"android:id/list_container\"]"],
  recyclerList: ["id=com.android.healthconnect.controller:id/recycler_view", "//androidx.recyclerview.widget.RecyclerView[@resource-id=\"com.android.healthconnect.controller:id/recycler_view\"]"],
  detailedPermissionsView: ["id=com.android.healthconnect.controller:id/detailed_permissions", "//android.widget.LinearLayout[@resource-id=\"com.android.healthconnect.controller:id/detailed_permissions\"]"],
  dataAccessTypeText: ["id=com.android.healthconnect.controller:id/data_access_type", "//android.widget.TextView[@resource-id=\"com.android.healthconnect.controller:id/data_access_type\"]"],
  accessInfoText: ["id=com.android.healthconnect.controller:id/access_info", "//android.widget.TextView[@resource-id=\"com.android.healthconnect.controller:id/access_info\"]"],
  privacyPolicyText: ["id=com.android.healthconnect.controller:id/privacy_policy", "//android.widget.TextView[@resource-id=\"com.android.healthconnect.controller:id/privacy_policy\"]"],
  btn: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.FrameLayout[1]/android.widget.RelativeLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/androidx.recyclerview.widget.RecyclerView[1]/android.widget.FrameLayout[1]"],
  settingslibMainSwitchBarBtn: ["id=com.android.healthconnect.controller:id/settingslib_main_switch_bar", "//android.widget.LinearLayout[@resource-id=\"com.android.healthconnect.controller:id/settingslib_main_switch_bar\"]"],
  frameView: ["id=com.android.healthconnect.controller:id/frame", "//android.widget.LinearLayout[@resource-id=\"com.android.healthconnect.controller:id/frame\"]"],
  switchText: ["id=com.android.healthconnect.controller:id/switch_text", "android=new UiSelector().text(\"Allow all\")", "//android.widget.TextView[@resource-id=\"com.android.healthconnect.controller:id/switch_text\" and @text=\"Allow all\"]"],
  switchWidgetSwitch: ["id=android:id/switch_widget", "//android.widget.Switch[@resource-id=\"android:id/switch_widget\"]"],
  titleText: ["android=new UiSelector().resourceId(\"android:id/title\").text(\"Allow “eGenome” to read\")", "android=new UiSelector().text(\"Allow “eGenome” to read\")", "//android.widget.TextView[@resource-id=\"android:id/title\" and @text=\"Allow “eGenome” to read\"]", "android=new UiSelector().resourceId(\"android:id/title\").instance(0)"],
  activity0Of1Btn: ["//android.widget.LinearLayout[@content-desc=\"Activity. 0 of 1 selected. Read Access\"]", "~Activity. 0 of 1 selected. Read Access"],
  expandArrowFrameView: ["id=com.android.healthconnect.controller:id/expand_arrow_frame", "//android.widget.LinearLayout[@resource-id=\"com.android.healthconnect.controller:id/expand_arrow_frame\"]"],
  expandArrowImage: ["id=com.android.healthconnect.controller:id/expand_arrow", "//android.widget.ImageView[@resource-id=\"com.android.healthconnect.controller:id/expand_arrow\"]"],
  titleText2: ["android=new UiSelector().resourceId(\"android:id/title\").text(\"Activity\")", "android=new UiSelector().text(\"Activity\")", "//android.widget.TextView[@resource-id=\"android:id/title\" and @text=\"Activity\"]", "android=new UiSelector().resourceId(\"android:id/title\").instance(1)"],
  summaryText: ["id=android:id/summary", "android=new UiSelector().text(\"0 of 1 selected\")", "//android.widget.TextView[@resource-id=\"android:id/summary\" and @text=\"0 of 1 selected\"]"],
  widgetFrameView: ["(//android.widget.LinearLayout[@resource-id=\"android:id/widget_frame\"])[1]", "android=new UiSelector().resourceId(\"android:id/widget_frame\").instance(0)", "id=android:id/widget_frame"],
  switchWidgetSwitch2: ["//android.widget.Switch[@resource-id=\"com.android.healthconnect.controller:id/switchWidget\" and @content-desc=\"Activity. 0 of 1 selected. Read Access\"]", "android=new UiSelector().resourceId(\"com.android.healthconnect.controller:id/switchWidget\").instance(0)", "~Activity. 0 of 1 selected. Read Access", "id=com.android.healthconnect.controller:id/switchWidget"],
  stepsReadAccessOffBtn: ["~Steps. Read Access. Off", "//android.widget.LinearLayout[@content-desc=\"Steps. Read Access. Off\"]"],
  iconFrameView: ["id=com.android.healthconnect.controller:id/icon_frame", "//android.widget.LinearLayout[@resource-id=\"com.android.healthconnect.controller:id/icon_frame\"]"],
  iconImage: ["id=android:id/icon", "//android.widget.ImageView[@resource-id=\"android:id/icon\"]"],
  titleText3: ["android=new UiSelector().resourceId(\"android:id/title\").text(\"Steps\")", "android=new UiSelector().text(\"Steps\")", "//android.widget.TextView[@resource-id=\"android:id/title\" and @text=\"Steps\"]", "android=new UiSelector().resourceId(\"android:id/title\").instance(2)"],
  switchWidgetSwitch3: ["(//android.widget.Switch[@resource-id=\"com.android.healthconnect.controller:id/switchWidget\"])[2]", "android=new UiSelector().resourceId(\"com.android.healthconnect.controller:id/switchWidget\").instance(1)", "id=com.android.healthconnect.controller:id/switchWidget"],
  actionContainerView: ["id=com.android.healthconnect.controller:id/action_container", "//android.widget.FrameLayout[@resource-id=\"com.android.healthconnect.controller:id/action_container\"]"],
  secondaryBtn: ["id=com.android.healthconnect.controller:id/secondary_button", "android=new UiSelector().text(\"Don't allow\")", "//android.widget.Button[@resource-id=\"com.android.healthconnect.controller:id/secondary_button\" and @text=\"Don't allow\"]"],
  primaryOutlineBtn: ["id=com.android.healthconnect.controller:id/primary_button_outline", "android=new UiSelector().text(\"Allow\")", "//android.widget.Button[@resource-id=\"com.android.healthconnect.controller:id/primary_button_outline\" and @text=\"Allow\"]"],
};

class AllowEGenomeToReadScreen extends BasePage {
  constructor() {
    super(L, ["switchText","switchWidgetSwitch","expandArrowImage"]);
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

  /** RelativeLayout */
  get healthConnectBottomSheetView() {
    return $(L.healthConnectBottomSheetView[0]);
  }

  /** FrameLayout */
  get bottomSheetFragmentContainerView() {
    return $(L.bottomSheetFragmentContainerView[0]);
  }

  /** RelativeLayout */
  get setupContainerView() {
    return $(L.setupContainerView[0]);
  }

  /** FrameLayout */
  get preferenceContainerView() {
    return $(L.preferenceContainerView[0]);
  }

  /** FrameLayout */
  get prefContainerView() {
    return $(L.prefContainerView[0]);
  }

  /** FrameLayout */
  get listContainerView() {
    return $(L.listContainerView[0]);
  }

  /** RecyclerView */
  get recyclerList() {
    return $(L.recyclerList[0]);
  }

  /** LinearLayout */
  get detailedPermissionsView() {
    return $(L.detailedPermissionsView[0]);
  }

  /** TextView "Choose which fitness and wellness data t" */
  get dataAccessTypeText() {
    return $(L.dataAccessTypeText[0]);
  }

  /** TextView "If you give read access, the app can rea" */
  get accessInfoText() {
    return $(L.accessInfoText[0]);
  }

  /** TextView "You can learn how eGenome handles your d" */
  get privacyPolicyText() {
    return $(L.privacyPolicyText[0]);
  }

  /** FrameLayout */
  get btn() {
    return $(L.btn[0]);
  }

  /** LinearLayout */
  get settingslibMainSwitchBarBtn() {
    return $(L.settingslibMainSwitchBarBtn[0]);
  }

  /** LinearLayout */
  get frameView() {
    return $(L.frameView[0]);
  }

  /** TextView "Allow all" */
  get switchText() {
    return $(L.switchText[0]);
  }

  /** Switch */
  get switchWidgetSwitch() {
    return $(L.switchWidgetSwitch[0]);
  }

  /** TextView "Allow “eGenome” to read" */
  get titleText() {
    return $(L.titleText[0]);
  }

  /** LinearLayout */
  get activity0Of1Btn() {
    return $(L.activity0Of1Btn[0]);
  }

  /** LinearLayout */
  get expandArrowFrameView() {
    return $(L.expandArrowFrameView[0]);
  }

  /** ImageView */
  get expandArrowImage() {
    return $(L.expandArrowImage[0]);
  }

  /** TextView "Activity" */
  get titleText2() {
    return $(L.titleText2[0]);
  }

  /** TextView "0 of 1 selected" */
  get summaryText() {
    return $(L.summaryText[0]);
  }

  /** LinearLayout */
  get widgetFrameView() {
    return $(L.widgetFrameView[0]);
  }

  /** Switch */
  get switchWidgetSwitch2() {
    return $(L.switchWidgetSwitch2[0]);
  }

  /** LinearLayout */
  get stepsReadAccessOffBtn() {
    return $(L.stepsReadAccessOffBtn[0]);
  }

  /** LinearLayout */
  get iconFrameView() {
    return $(L.iconFrameView[0]);
  }

  /** ImageView */
  get iconImage() {
    return $(L.iconImage[0]);
  }

  /** TextView "Steps" */
  get titleText3() {
    return $(L.titleText3[0]);
  }

  /** Switch */
  get switchWidgetSwitch3() {
    return $(L.switchWidgetSwitch3[0]);
  }

  /** FrameLayout */
  get actionContainerView() {
    return $(L.actionContainerView[0]);
  }

  /** Button "Don't allow" */
  get secondaryBtn() {
    return $(L.secondaryBtn[0]);
  }

  /** Button "Allow" */
  get primaryOutlineBtn() {
    return $(L.primaryOutlineBtn[0]);
  }
}

export { AllowEGenomeToReadScreen as AllowEGenomeToReadScreenClass, L as AllowEGenomeToReadScreenLocators };
export default new AllowEGenomeToReadScreen();
