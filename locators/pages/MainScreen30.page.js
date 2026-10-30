// AUTO-GENERATED from locators/MainScreen30.json by scripts/locator-capture.
// Do not edit: it is regenerated on every capture. Extend this class for actions, e.g.
//   class Login extends MainScreen30Class { async login(phone) { ... } }
// Screen: (no title) | activity: com.android.dialer.main.impl.MainActivity | updated: 2026-10-28T07:54:59.875Z
import BasePage from './BasePage.js';

const L = {
  actionBarRootView: ["id=com.google.android.dialer:id/action_bar_root", "//android.widget.LinearLayout[@resource-id=\"com.google.android.dialer:id/action_bar_root\"]"],
  mainFragmentContainerView: ["id=com.google.android.dialer:id/main_fragment_container", "//android.widget.FrameLayout[@resource-id=\"com.google.android.dialer:id/main_fragment_container\"]"],
  mainFragmentRootView: ["id=com.google.android.dialer:id/main_fragment_root", "//android.widget.FrameLayout[@resource-id=\"com.google.android.dialer:id/main_fragment_root\"]"],
  mainScreenContainerView: ["id=com.google.android.dialer:id/main_screen_container", "//androidx.drawerlayout.widget.DrawerLayout[@resource-id=\"com.google.android.dialer:id/main_screen_container\"]"],
  mainScreenWithoutNavigationView: ["id=com.google.android.dialer:id/main_screen_without_navigation_view", "//android.view.ViewGroup[@resource-id=\"com.google.android.dialer:id/main_screen_without_navigation_view\"]"],
  mainScreenCoordinatorLayoutView: ["id=com.google.android.dialer:id/main_screen_coordinator_layout", "//android.view.ViewGroup[@resource-id=\"com.google.android.dialer:id/main_screen_coordinator_layout\"]"],
  tabFragmentContainerView: ["id=com.google.android.dialer:id/tab_fragment_container", "//android.widget.FrameLayout[@resource-id=\"com.google.android.dialer:id/tab_fragment_container\"]"],
  dialpadSearchRootView: ["id=com.google.android.dialer:id/dialpad_search_root", "//android.view.ViewGroup[@resource-id=\"com.google.android.dialer:id/dialpad_search_root\"]"],
  dialpadSearchSearchFragmentView: ["id=com.google.android.dialer:id/dialpad_search_search_fragment_view", "//android.widget.FrameLayout[@resource-id=\"com.google.android.dialer:id/dialpad_search_search_fragment_view\"]"],
  resultContainerList: ["id=com.google.android.dialer:id/result_container", "//android.widget.ScrollView[@resource-id=\"com.google.android.dialer:id/result_container\"]"],
  searchRecyclerList: ["id=com.google.android.dialer:id/search_recycler_view", "//android.support.v7.widget.RecyclerView[@resource-id=\"com.google.android.dialer:id/search_recycler_view\"]"],
  btn: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/androidx.drawerlayout.widget.DrawerLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.ScrollView[1]/android.widget.LinearLayout[1]/android.support.v7.widget.RecyclerView[1]/android.widget.FrameLayout[1]"],
  searchActionImage: ["(//android.widget.ImageView[@resource-id=\"com.google.android.dialer:id/search_action_image\"])[1]", "android=new UiSelector().resourceId(\"com.google.android.dialer:id/search_action_image\").instance(0)", "id=com.google.android.dialer:id/search_action_image"],
  searchActionText: ["android=new UiSelector().resourceId(\"com.google.android.dialer:id/search_action_text\").text(\"Create new contact\")", "android=new UiSelector().text(\"Create new contact\")", "//android.widget.TextView[@resource-id=\"com.google.android.dialer:id/search_action_text\" and @text=\"Create new contact\"]", "android=new UiSelector().resourceId(\"com.google.android.dialer:id/search_action_text\").instance(0)"],
  btn2: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/androidx.drawerlayout.widget.DrawerLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.ScrollView[1]/android.widget.LinearLayout[1]/android.support.v7.widget.RecyclerView[1]/android.widget.FrameLayout[2]"],
  searchActionText2: ["android=new UiSelector().resourceId(\"com.google.android.dialer:id/search_action_text\").text(\"Add to a contact\")", "android=new UiSelector().text(\"Add to a contact\")", "//android.widget.TextView[@resource-id=\"com.google.android.dialer:id/search_action_text\" and @text=\"Add to a contact\"]", "android=new UiSelector().resourceId(\"com.google.android.dialer:id/search_action_text\").instance(1)"],
  btn3: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/androidx.drawerlayout.widget.DrawerLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.ScrollView[1]/android.widget.LinearLayout[1]/android.support.v7.widget.RecyclerView[1]/android.widget.FrameLayout[3]"],
  dialpadSearchDialpadView: ["id=com.google.android.dialer:id/dialpad_search_dialpad_view", "//android.widget.FrameLayout[@resource-id=\"com.google.android.dialer:id/dialpad_search_dialpad_view\"]"],
  dialpadVerticalView: ["id=com.google.android.dialer:id/dialpad_view_vertical", "//android.widget.LinearLayout[@resource-id=\"com.google.android.dialer:id/dialpad_view_vertical\"]"],
  dialpadBtn: ["id=com.google.android.dialer:id/dialpad_view", "//android.widget.LinearLayout[@resource-id=\"com.google.android.dialer:id/dialpad_view\"]"],
  digitsContainerView: ["id=com.google.android.dialer:id/digits_container", "//android.view.ViewGroup[@resource-id=\"com.google.android.dialer:id/digits_container\"]"],
  dialpadOverflowBtn: ["~More options", "id=com.google.android.dialer:id/dialpad_overflow", "//android.widget.ImageButton[@resource-id=\"com.google.android.dialer:id/dialpad_overflow\" and @content-desc=\"More options\"]"],
  digitsInput: ["id=com.google.android.dialer:id/digits", "android=new UiSelector().text(\"08047180026\")", "//android.widget.EditText[@resource-id=\"com.google.android.dialer:id/digits\" and @text=\"08047180026\"]"],
  deleteBtn: ["~backspace", "id=com.google.android.dialer:id/deleteButton", "//android.widget.ImageButton[@resource-id=\"com.google.android.dialer:id/deleteButton\" and @content-desc=\"backspace\"]"],
  dialpadView: ["id=com.google.android.dialer:id/dialpad", "//android.widget.FrameLayout[@resource-id=\"com.google.android.dialer:id/dialpad\"]"],
  dialpadScalableContentsView: ["id=com.google.android.dialer:id/dialpad_scalable_contents", "//android.widget.FrameLayout[@resource-id=\"com.google.android.dialer:id/dialpad_scalable_contents\"]"],
  oneBtn: ["~1,", "id=com.google.android.dialer:id/one", "//android.widget.FrameLayout[@resource-id=\"com.google.android.dialer:id/one\" and @content-desc=\"1,\"]"],
  dialpadKeyNumberText: ["android=new UiSelector().resourceId(\"com.google.android.dialer:id/dialpad_key_number\").text(\"1\")", "android=new UiSelector().text(\"1\")", "//android.widget.TextView[@resource-id=\"com.google.android.dialer:id/dialpad_key_number\" and @text=\"1\"]", "android=new UiSelector().resourceId(\"com.google.android.dialer:id/dialpad_key_number\").instance(0)"],
  dialpadKeyIconImage: ["id=com.google.android.dialer:id/dialpad_key_icon", "//android.widget.ImageView[@resource-id=\"com.google.android.dialer:id/dialpad_key_icon\"]"],
  twoBtn: ["~2,ABC", "id=com.google.android.dialer:id/two", "//android.widget.FrameLayout[@resource-id=\"com.google.android.dialer:id/two\" and @content-desc=\"2,ABC\"]"],
  dialpadKeyNumberText2: ["android=new UiSelector().resourceId(\"com.google.android.dialer:id/dialpad_key_number\").text(\"2\")", "android=new UiSelector().text(\"2\")", "//android.widget.TextView[@resource-id=\"com.google.android.dialer:id/dialpad_key_number\" and @text=\"2\"]", "android=new UiSelector().resourceId(\"com.google.android.dialer:id/dialpad_key_number\").instance(1)"],
  dialpadKeyLettersText: ["android=new UiSelector().resourceId(\"com.google.android.dialer:id/dialpad_key_letters\").text(\"ABC\")", "android=new UiSelector().text(\"ABC\")", "//android.widget.TextView[@resource-id=\"com.google.android.dialer:id/dialpad_key_letters\" and @text=\"ABC\"]", "android=new UiSelector().resourceId(\"com.google.android.dialer:id/dialpad_key_letters\").instance(0)"],
  threeBtn: ["~3,DEF", "id=com.google.android.dialer:id/three", "//android.widget.FrameLayout[@resource-id=\"com.google.android.dialer:id/three\" and @content-desc=\"3,DEF\"]"],
  dialpadKeyNumberText3: ["android=new UiSelector().resourceId(\"com.google.android.dialer:id/dialpad_key_number\").text(\"3\")", "android=new UiSelector().text(\"3\")", "//android.widget.TextView[@resource-id=\"com.google.android.dialer:id/dialpad_key_number\" and @text=\"3\"]", "android=new UiSelector().resourceId(\"com.google.android.dialer:id/dialpad_key_number\").instance(2)"],
  dialpadKeyLettersText2: ["android=new UiSelector().resourceId(\"com.google.android.dialer:id/dialpad_key_letters\").text(\"DEF\")", "android=new UiSelector().text(\"DEF\")", "//android.widget.TextView[@resource-id=\"com.google.android.dialer:id/dialpad_key_letters\" and @text=\"DEF\"]", "android=new UiSelector().resourceId(\"com.google.android.dialer:id/dialpad_key_letters\").instance(1)"],
  fourBtn: ["~4,GHI", "id=com.google.android.dialer:id/four", "//android.widget.FrameLayout[@resource-id=\"com.google.android.dialer:id/four\" and @content-desc=\"4,GHI\"]"],
  dialpadKeyNumberText4: ["android=new UiSelector().resourceId(\"com.google.android.dialer:id/dialpad_key_number\").text(\"4\")", "android=new UiSelector().text(\"4\")", "//android.widget.TextView[@resource-id=\"com.google.android.dialer:id/dialpad_key_number\" and @text=\"4\"]", "android=new UiSelector().resourceId(\"com.google.android.dialer:id/dialpad_key_number\").instance(3)"],
  dialpadKeyLettersText3: ["android=new UiSelector().resourceId(\"com.google.android.dialer:id/dialpad_key_letters\").text(\"GHI\")", "android=new UiSelector().text(\"GHI\")", "//android.widget.TextView[@resource-id=\"com.google.android.dialer:id/dialpad_key_letters\" and @text=\"GHI\"]", "android=new UiSelector().resourceId(\"com.google.android.dialer:id/dialpad_key_letters\").instance(2)"],
  fiveBtn: ["~5,JKL", "id=com.google.android.dialer:id/five", "//android.widget.FrameLayout[@resource-id=\"com.google.android.dialer:id/five\" and @content-desc=\"5,JKL\"]"],
  dialpadKeyNumberText5: ["android=new UiSelector().resourceId(\"com.google.android.dialer:id/dialpad_key_number\").text(\"5\")", "android=new UiSelector().text(\"5\")", "//android.widget.TextView[@resource-id=\"com.google.android.dialer:id/dialpad_key_number\" and @text=\"5\"]", "android=new UiSelector().resourceId(\"com.google.android.dialer:id/dialpad_key_number\").instance(4)"],
  dialpadKeyLettersText4: ["android=new UiSelector().resourceId(\"com.google.android.dialer:id/dialpad_key_letters\").text(\"JKL\")", "android=new UiSelector().text(\"JKL\")", "//android.widget.TextView[@resource-id=\"com.google.android.dialer:id/dialpad_key_letters\" and @text=\"JKL\"]", "android=new UiSelector().resourceId(\"com.google.android.dialer:id/dialpad_key_letters\").instance(3)"],
  sixBtn: ["~6,MNO", "id=com.google.android.dialer:id/six", "//android.widget.FrameLayout[@resource-id=\"com.google.android.dialer:id/six\" and @content-desc=\"6,MNO\"]"],
  dialpadKeyNumberText6: ["android=new UiSelector().resourceId(\"com.google.android.dialer:id/dialpad_key_number\").text(\"6\")", "android=new UiSelector().text(\"6\")", "//android.widget.TextView[@resource-id=\"com.google.android.dialer:id/dialpad_key_number\" and @text=\"6\"]", "android=new UiSelector().resourceId(\"com.google.android.dialer:id/dialpad_key_number\").instance(5)"],
  dialpadKeyLettersText5: ["android=new UiSelector().resourceId(\"com.google.android.dialer:id/dialpad_key_letters\").text(\"MNO\")", "android=new UiSelector().text(\"MNO\")", "//android.widget.TextView[@resource-id=\"com.google.android.dialer:id/dialpad_key_letters\" and @text=\"MNO\"]", "android=new UiSelector().resourceId(\"com.google.android.dialer:id/dialpad_key_letters\").instance(4)"],
  sevenBtn: ["~7,PQRS", "id=com.google.android.dialer:id/seven", "//android.widget.FrameLayout[@resource-id=\"com.google.android.dialer:id/seven\" and @content-desc=\"7,PQRS\"]"],
  dialpadKeyNumberText7: ["android=new UiSelector().resourceId(\"com.google.android.dialer:id/dialpad_key_number\").text(\"7\")", "android=new UiSelector().text(\"7\")", "//android.widget.TextView[@resource-id=\"com.google.android.dialer:id/dialpad_key_number\" and @text=\"7\"]", "android=new UiSelector().resourceId(\"com.google.android.dialer:id/dialpad_key_number\").instance(6)"],
  dialpadKeyLettersText6: ["android=new UiSelector().resourceId(\"com.google.android.dialer:id/dialpad_key_letters\").text(\"PQRS\")", "android=new UiSelector().text(\"PQRS\")", "//android.widget.TextView[@resource-id=\"com.google.android.dialer:id/dialpad_key_letters\" and @text=\"PQRS\"]", "android=new UiSelector().resourceId(\"com.google.android.dialer:id/dialpad_key_letters\").instance(5)"],
  eightBtn: ["~8,TUV", "id=com.google.android.dialer:id/eight", "//android.widget.FrameLayout[@resource-id=\"com.google.android.dialer:id/eight\" and @content-desc=\"8,TUV\"]"],
  dialpadKeyNumberText8: ["android=new UiSelector().resourceId(\"com.google.android.dialer:id/dialpad_key_number\").text(\"8\")", "android=new UiSelector().text(\"8\")", "//android.widget.TextView[@resource-id=\"com.google.android.dialer:id/dialpad_key_number\" and @text=\"8\"]", "android=new UiSelector().resourceId(\"com.google.android.dialer:id/dialpad_key_number\").instance(7)"],
  dialpadKeyLettersText7: ["android=new UiSelector().resourceId(\"com.google.android.dialer:id/dialpad_key_letters\").text(\"TUV\")", "android=new UiSelector().text(\"TUV\")", "//android.widget.TextView[@resource-id=\"com.google.android.dialer:id/dialpad_key_letters\" and @text=\"TUV\"]", "android=new UiSelector().resourceId(\"com.google.android.dialer:id/dialpad_key_letters\").instance(6)"],
  nineBtn: ["~9,WXYZ", "id=com.google.android.dialer:id/nine", "//android.widget.FrameLayout[@resource-id=\"com.google.android.dialer:id/nine\" and @content-desc=\"9,WXYZ\"]"],
  dialpadKeyNumberText9: ["android=new UiSelector().resourceId(\"com.google.android.dialer:id/dialpad_key_number\").text(\"9\")", "android=new UiSelector().text(\"9\")", "//android.widget.TextView[@resource-id=\"com.google.android.dialer:id/dialpad_key_number\" and @text=\"9\"]", "android=new UiSelector().resourceId(\"com.google.android.dialer:id/dialpad_key_number\").instance(8)"],
  dialpadKeyLettersText8: ["android=new UiSelector().resourceId(\"com.google.android.dialer:id/dialpad_key_letters\").text(\"WXYZ\")", "android=new UiSelector().text(\"WXYZ\")", "//android.widget.TextView[@resource-id=\"com.google.android.dialer:id/dialpad_key_letters\" and @text=\"WXYZ\"]", "android=new UiSelector().resourceId(\"com.google.android.dialer:id/dialpad_key_letters\").instance(7)"],
  starBtn: ["~*", "id=com.google.android.dialer:id/star", "//android.widget.FrameLayout[@resource-id=\"com.google.android.dialer:id/star\" and @content-desc=\"*\"]"],
  dialpadKeyNumberText10: ["android=new UiSelector().resourceId(\"com.google.android.dialer:id/dialpad_key_number\").text(\"∗\")", "android=new UiSelector().text(\"∗\")", "//android.widget.TextView[@resource-id=\"com.google.android.dialer:id/dialpad_key_number\" and @text=\"∗\"]", "android=new UiSelector().resourceId(\"com.google.android.dialer:id/dialpad_key_number\").instance(9)"],
  zeroBtn: ["~0", "id=com.google.android.dialer:id/zero", "//android.widget.FrameLayout[@resource-id=\"com.google.android.dialer:id/zero\" and @content-desc=\"0\"]"],
  dialpadKeyNumberText11: ["android=new UiSelector().resourceId(\"com.google.android.dialer:id/dialpad_key_number\").text(\"0\")", "android=new UiSelector().text(\"0\")", "//android.widget.TextView[@resource-id=\"com.google.android.dialer:id/dialpad_key_number\" and @text=\"0\"]", "android=new UiSelector().resourceId(\"com.google.android.dialer:id/dialpad_key_number\").instance(10)"],
  dialpadKeyLettersText9: ["android=new UiSelector().resourceId(\"com.google.android.dialer:id/dialpad_key_letters\").text(\"+\")", "android=new UiSelector().text(\"+\")", "//android.widget.TextView[@resource-id=\"com.google.android.dialer:id/dialpad_key_letters\" and @text=\"+\"]", "android=new UiSelector().resourceId(\"com.google.android.dialer:id/dialpad_key_letters\").instance(8)"],
  poundBtn: ["~#", "id=com.google.android.dialer:id/pound", "//android.widget.FrameLayout[@resource-id=\"com.google.android.dialer:id/pound\" and @content-desc=\"#\"]"],
  dialpadKeyNumberText12: ["android=new UiSelector().resourceId(\"com.google.android.dialer:id/dialpad_key_number\").text(\"#\")", "android=new UiSelector().text(\"#\")", "//android.widget.TextView[@resource-id=\"com.google.android.dialer:id/dialpad_key_number\" and @text=\"#\"]", "android=new UiSelector().resourceId(\"com.google.android.dialer:id/dialpad_key_number\").instance(11)"],
  dialpadCallButtonsView: ["id=com.google.android.dialer:id/dialpad_call_buttons", "//android.view.ViewGroup[@resource-id=\"com.google.android.dialer:id/dialpad_call_buttons\"]"],
  dialpadVoiceCallBtn: ["~dial", "id=com.google.android.dialer:id/dialpad_voice_call_button", "android=new UiSelector().text(\"Call\")", "//android.widget.Button[@resource-id=\"com.google.android.dialer:id/dialpad_voice_call_button\" and @content-desc=\"dial\" and @text=\"Call\"]"],
  navigationBarLayoutView: ["id=com.google.android.dialer:id/navigation_bar_layout", "//android.widget.FrameLayout[@resource-id=\"com.google.android.dialer:id/navigation_bar_layout\"]"],
  tabCallHistoryBtn: ["~Home", "id=com.google.android.dialer:id/tab_call_history", "//android.widget.FrameLayout[@resource-id=\"com.google.android.dialer:id/tab_call_history\" and @content-desc=\"Home\"]"],
  navigationBarItemContentContainerView: ["(//android.widget.LinearLayout[@resource-id=\"com.google.android.dialer:id/navigation_bar_item_content_container\"])[1]", "android=new UiSelector().resourceId(\"com.google.android.dialer:id/navigation_bar_item_content_container\").instance(0)", "id=com.google.android.dialer:id/navigation_bar_item_content_container"],
  navigationBarItemIconContainerView: ["(//android.widget.FrameLayout[@resource-id=\"com.google.android.dialer:id/navigation_bar_item_icon_container\"])[1]", "android=new UiSelector().resourceId(\"com.google.android.dialer:id/navigation_bar_item_icon_container\").instance(0)", "id=com.google.android.dialer:id/navigation_bar_item_icon_container"],
  navigationBarItemInnerContentContainerView: ["(//android.widget.LinearLayout[@resource-id=\"com.google.android.dialer:id/navigation_bar_item_inner_content_container\"])[1]", "android=new UiSelector().resourceId(\"com.google.android.dialer:id/navigation_bar_item_inner_content_container\").instance(0)", "id=com.google.android.dialer:id/navigation_bar_item_inner_content_container"],
  navigationBarItemIconImage: ["(//android.widget.ImageView[@resource-id=\"com.google.android.dialer:id/navigation_bar_item_icon_view\"])[1]", "android=new UiSelector().resourceId(\"com.google.android.dialer:id/navigation_bar_item_icon_view\").instance(0)", "id=com.google.android.dialer:id/navigation_bar_item_icon_view"],
  navigationBarItemLabelsGroupView: ["(//android.view.ViewGroup[@resource-id=\"com.google.android.dialer:id/navigation_bar_item_labels_group\"])[1]", "android=new UiSelector().resourceId(\"com.google.android.dialer:id/navigation_bar_item_labels_group\").instance(0)", "id=com.google.android.dialer:id/navigation_bar_item_labels_group"],
  navigationBarItemSmallLabelText: ["android=new UiSelector().resourceId(\"com.google.android.dialer:id/navigation_bar_item_small_label_view\").text(\"Home\")", "android=new UiSelector().text(\"Home\")", "//android.widget.TextView[@resource-id=\"com.google.android.dialer:id/navigation_bar_item_small_label_view\" and @text=\"Home\"]", "android=new UiSelector().resourceId(\"com.google.android.dialer:id/navigation_bar_item_small_label_view\").instance(0)"],
  tabDialpadView: ["~Keypad", "id=com.google.android.dialer:id/tab_dialpad", "//android.widget.FrameLayout[@resource-id=\"com.google.android.dialer:id/tab_dialpad\" and @content-desc=\"Keypad\"]"],
  navigationBarItemActiveIndicatorView: ["id=com.google.android.dialer:id/navigation_bar_item_active_indicator_view", "//android.view.View[@resource-id=\"com.google.android.dialer:id/navigation_bar_item_active_indicator_view\"]"],
  navigationBarItemLargeLabelText: ["id=com.google.android.dialer:id/navigation_bar_item_large_label_view", "android=new UiSelector().text(\"Keypad\")", "//android.widget.TextView[@resource-id=\"com.google.android.dialer:id/navigation_bar_item_large_label_view\" and @text=\"Keypad\"]"],
  tabVoicemailBtn: ["~Voicemail", "id=com.google.android.dialer:id/tab_voicemail", "//android.widget.FrameLayout[@resource-id=\"com.google.android.dialer:id/tab_voicemail\" and @content-desc=\"Voicemail\"]"],
  navigationBarItemSmallLabelText2: ["android=new UiSelector().resourceId(\"com.google.android.dialer:id/navigation_bar_item_small_label_view\").text(\"Voicemail\")", "android=new UiSelector().text(\"Voicemail\")", "//android.widget.TextView[@resource-id=\"com.google.android.dialer:id/navigation_bar_item_small_label_view\" and @text=\"Voicemail\"]", "android=new UiSelector().resourceId(\"com.google.android.dialer:id/navigation_bar_item_small_label_view\").instance(1)"],
};

class MainScreen30 extends BasePage {
  constructor() {
    super(L, ["digitsInput","dialpadOverflowBtn","deleteBtn"]);
  }

  /** LinearLayout */
  get actionBarRootView() {
    return $(L.actionBarRootView[0]);
  }

  /** FrameLayout */
  get mainFragmentContainerView() {
    return $(L.mainFragmentContainerView[0]);
  }

  /** FrameLayout */
  get mainFragmentRootView() {
    return $(L.mainFragmentRootView[0]);
  }

  /** DrawerLayout */
  get mainScreenContainerView() {
    return $(L.mainScreenContainerView[0]);
  }

  /** ViewGroup */
  get mainScreenWithoutNavigationView() {
    return $(L.mainScreenWithoutNavigationView[0]);
  }

  /** ViewGroup */
  get mainScreenCoordinatorLayoutView() {
    return $(L.mainScreenCoordinatorLayoutView[0]);
  }

  /** FrameLayout */
  get tabFragmentContainerView() {
    return $(L.tabFragmentContainerView[0]);
  }

  /** ViewGroup */
  get dialpadSearchRootView() {
    return $(L.dialpadSearchRootView[0]);
  }

  /** FrameLayout */
  get dialpadSearchSearchFragmentView() {
    return $(L.dialpadSearchSearchFragmentView[0]);
  }

  /** ScrollView */
  get resultContainerList() {
    return $(L.resultContainerList[0]);
  }

  /** RecyclerView */
  get searchRecyclerList() {
    return $(L.searchRecyclerList[0]);
  }

  /** FrameLayout */
  get btn() {
    return $(L.btn[0]);
  }

  /** ImageView */
  get searchActionImage() {
    return $(L.searchActionImage[0]);
  }

  /** TextView "Create new contact" */
  get searchActionText() {
    return $(L.searchActionText[0]);
  }

  /** FrameLayout */
  get btn2() {
    return $(L.btn2[0]);
  }

  /** TextView "Add to a contact" */
  get searchActionText2() {
    return $(L.searchActionText2[0]);
  }

  /** FrameLayout */
  get btn3() {
    return $(L.btn3[0]);
  }

  /** FrameLayout */
  get dialpadSearchDialpadView() {
    return $(L.dialpadSearchDialpadView[0]);
  }

  /** LinearLayout */
  get dialpadVerticalView() {
    return $(L.dialpadVerticalView[0]);
  }

  /** LinearLayout */
  get dialpadBtn() {
    return $(L.dialpadBtn[0]);
  }

  /** ViewGroup */
  get digitsContainerView() {
    return $(L.digitsContainerView[0]);
  }

  /** ImageButton */
  get dialpadOverflowBtn() {
    return $(L.dialpadOverflowBtn[0]);
  }

  /** EditText "08047180026" */
  get digitsInput() {
    return $(L.digitsInput[0]);
  }

  /** ImageButton */
  get deleteBtn() {
    return $(L.deleteBtn[0]);
  }

  /** FrameLayout */
  get dialpadView() {
    return $(L.dialpadView[0]);
  }

  /** FrameLayout */
  get dialpadScalableContentsView() {
    return $(L.dialpadScalableContentsView[0]);
  }

  /** FrameLayout */
  get oneBtn() {
    return $(L.oneBtn[0]);
  }

  /** TextView "1" */
  get dialpadKeyNumberText() {
    return $(L.dialpadKeyNumberText[0]);
  }

  /** ImageView */
  get dialpadKeyIconImage() {
    return $(L.dialpadKeyIconImage[0]);
  }

  /** FrameLayout */
  get twoBtn() {
    return $(L.twoBtn[0]);
  }

  /** TextView "2" */
  get dialpadKeyNumberText2() {
    return $(L.dialpadKeyNumberText2[0]);
  }

  /** TextView "ABC" */
  get dialpadKeyLettersText() {
    return $(L.dialpadKeyLettersText[0]);
  }

  /** FrameLayout */
  get threeBtn() {
    return $(L.threeBtn[0]);
  }

  /** TextView "3" */
  get dialpadKeyNumberText3() {
    return $(L.dialpadKeyNumberText3[0]);
  }

  /** TextView "DEF" */
  get dialpadKeyLettersText2() {
    return $(L.dialpadKeyLettersText2[0]);
  }

  /** FrameLayout */
  get fourBtn() {
    return $(L.fourBtn[0]);
  }

  /** TextView "4" */
  get dialpadKeyNumberText4() {
    return $(L.dialpadKeyNumberText4[0]);
  }

  /** TextView "GHI" */
  get dialpadKeyLettersText3() {
    return $(L.dialpadKeyLettersText3[0]);
  }

  /** FrameLayout */
  get fiveBtn() {
    return $(L.fiveBtn[0]);
  }

  /** TextView "5" */
  get dialpadKeyNumberText5() {
    return $(L.dialpadKeyNumberText5[0]);
  }

  /** TextView "JKL" */
  get dialpadKeyLettersText4() {
    return $(L.dialpadKeyLettersText4[0]);
  }

  /** FrameLayout */
  get sixBtn() {
    return $(L.sixBtn[0]);
  }

  /** TextView "6" */
  get dialpadKeyNumberText6() {
    return $(L.dialpadKeyNumberText6[0]);
  }

  /** TextView "MNO" */
  get dialpadKeyLettersText5() {
    return $(L.dialpadKeyLettersText5[0]);
  }

  /** FrameLayout */
  get sevenBtn() {
    return $(L.sevenBtn[0]);
  }

  /** TextView "7" */
  get dialpadKeyNumberText7() {
    return $(L.dialpadKeyNumberText7[0]);
  }

  /** TextView "PQRS" */
  get dialpadKeyLettersText6() {
    return $(L.dialpadKeyLettersText6[0]);
  }

  /** FrameLayout */
  get eightBtn() {
    return $(L.eightBtn[0]);
  }

  /** TextView "8" */
  get dialpadKeyNumberText8() {
    return $(L.dialpadKeyNumberText8[0]);
  }

  /** TextView "TUV" */
  get dialpadKeyLettersText7() {
    return $(L.dialpadKeyLettersText7[0]);
  }

  /** FrameLayout */
  get nineBtn() {
    return $(L.nineBtn[0]);
  }

  /** TextView "9" */
  get dialpadKeyNumberText9() {
    return $(L.dialpadKeyNumberText9[0]);
  }

  /** TextView "WXYZ" */
  get dialpadKeyLettersText8() {
    return $(L.dialpadKeyLettersText8[0]);
  }

  /** FrameLayout */
  get starBtn() {
    return $(L.starBtn[0]);
  }

  /** TextView "∗" */
  get dialpadKeyNumberText10() {
    return $(L.dialpadKeyNumberText10[0]);
  }

  /** FrameLayout */
  get zeroBtn() {
    return $(L.zeroBtn[0]);
  }

  /** TextView "0" */
  get dialpadKeyNumberText11() {
    return $(L.dialpadKeyNumberText11[0]);
  }

  /** TextView "+" */
  get dialpadKeyLettersText9() {
    return $(L.dialpadKeyLettersText9[0]);
  }

  /** FrameLayout */
  get poundBtn() {
    return $(L.poundBtn[0]);
  }

  /** TextView "#" */
  get dialpadKeyNumberText12() {
    return $(L.dialpadKeyNumberText12[0]);
  }

  /** ViewGroup */
  get dialpadCallButtonsView() {
    return $(L.dialpadCallButtonsView[0]);
  }

  /** Button "Call" */
  get dialpadVoiceCallBtn() {
    return $(L.dialpadVoiceCallBtn[0]);
  }

  /** FrameLayout */
  get navigationBarLayoutView() {
    return $(L.navigationBarLayoutView[0]);
  }

  /** FrameLayout */
  get tabCallHistoryBtn() {
    return $(L.tabCallHistoryBtn[0]);
  }

  /** LinearLayout */
  get navigationBarItemContentContainerView() {
    return $(L.navigationBarItemContentContainerView[0]);
  }

  /** FrameLayout */
  get navigationBarItemIconContainerView() {
    return $(L.navigationBarItemIconContainerView[0]);
  }

  /** LinearLayout */
  get navigationBarItemInnerContentContainerView() {
    return $(L.navigationBarItemInnerContentContainerView[0]);
  }

  /** ImageView */
  get navigationBarItemIconImage() {
    return $(L.navigationBarItemIconImage[0]);
  }

  /** ViewGroup */
  get navigationBarItemLabelsGroupView() {
    return $(L.navigationBarItemLabelsGroupView[0]);
  }

  /** TextView "Home" */
  get navigationBarItemSmallLabelText() {
    return $(L.navigationBarItemSmallLabelText[0]);
  }

  /** FrameLayout */
  get tabDialpadView() {
    return $(L.tabDialpadView[0]);
  }

  /** View */
  get navigationBarItemActiveIndicatorView() {
    return $(L.navigationBarItemActiveIndicatorView[0]);
  }

  /** TextView "Keypad" */
  get navigationBarItemLargeLabelText() {
    return $(L.navigationBarItemLargeLabelText[0]);
  }

  /** FrameLayout */
  get tabVoicemailBtn() {
    return $(L.tabVoicemailBtn[0]);
  }

  /** TextView "Voicemail" */
  get navigationBarItemSmallLabelText2() {
    return $(L.navigationBarItemSmallLabelText2[0]);
  }
}

export { MainScreen30 as MainScreen30Class, L as MainScreen30Locators };
export default new MainScreen30();
