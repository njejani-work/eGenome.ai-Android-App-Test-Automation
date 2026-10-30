// AUTO-GENERATED from locators/MainScreen31.json by scripts/locator-capture.
// Do not edit: it is regenerated on every capture. Extend this class for actions, e.g.
//   class Login extends MainScreen31Class { async login(phone) { ... } }
// Screen: (no title) | activity: com.android.dialer.main.impl.MainActivity | updated: 2026-10-28T07:55:03.471Z
import BasePage from './BasePage.js';

const L = {
  actionBarRootView: ["id=com.google.android.dialer:id/action_bar_root", "//android.widget.LinearLayout[@resource-id=\"com.google.android.dialer:id/action_bar_root\"]"],
  mainFragmentContainerView: ["id=com.google.android.dialer:id/main_fragment_container", "//android.widget.FrameLayout[@resource-id=\"com.google.android.dialer:id/main_fragment_container\"]"],
  mainFragmentRootView: ["id=com.google.android.dialer:id/main_fragment_root", "//android.widget.FrameLayout[@resource-id=\"com.google.android.dialer:id/main_fragment_root\"]"],
  mainScreenContainerView: ["id=com.google.android.dialer:id/main_screen_container", "//androidx.drawerlayout.widget.DrawerLayout[@resource-id=\"com.google.android.dialer:id/main_screen_container\"]"],
  mainScreenWithoutNavigationView: ["id=com.google.android.dialer:id/main_screen_without_navigation_view", "//android.view.ViewGroup[@resource-id=\"com.google.android.dialer:id/main_screen_without_navigation_view\"]"],
  mainScreenCoordinatorLayoutView: ["id=com.google.android.dialer:id/main_screen_coordinator_layout", "//android.view.ViewGroup[@resource-id=\"com.google.android.dialer:id/main_screen_coordinator_layout\"]"],
  tabFragmentContainerView: ["id=com.google.android.dialer:id/tab_fragment_container", "//android.widget.FrameLayout[@resource-id=\"com.google.android.dialer:id/tab_fragment_container\"]"],
  parentConstraintLayoutView: ["id=com.google.android.dialer:id/parent_constraint_layout", "//android.view.ViewGroup[@resource-id=\"com.google.android.dialer:id/parent_constraint_layout\"]"],
  callLogSnackbarContainerView: ["id=com.google.android.dialer:id/call_log_snackbar_container", "//android.view.ViewGroup[@resource-id=\"com.google.android.dialer:id/call_log_snackbar_container\"]"],
  callLogRecyclerList: ["id=com.google.android.dialer:id/call_log_recycler_view", "//android.support.v7.widget.RecyclerView[@resource-id=\"com.google.android.dialer:id/call_log_recycler_view\"]"],
  view: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/androidx.drawerlayout.widget.DrawerLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.support.v7.widget.RecyclerView[1]/androidx.compose.ui.platform.ComposeView[1]/android.view.View[1]/android.view.View[1]"],
  btn: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/androidx.drawerlayout.widget.DrawerLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.support.v7.widget.RecyclerView[1]/androidx.compose.ui.platform.ComposeView[1]/android.view.View[1]/android.view.View[1]/android.view.View[1]"],
  allText: ["android=new UiSelector().text(\"All\")", "//android.widget.TextView[@text=\"All\"]"],
  btn2: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/androidx.drawerlayout.widget.DrawerLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.support.v7.widget.RecyclerView[1]/androidx.compose.ui.platform.ComposeView[1]/android.view.View[1]/android.view.View[1]/android.view.View[2]"],
  missedText: ["android=new UiSelector().text(\"Missed\")", "//android.widget.TextView[@text=\"Missed\"]"],
  btn3: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/androidx.drawerlayout.widget.DrawerLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.support.v7.widget.RecyclerView[1]/androidx.compose.ui.platform.ComposeView[1]/android.view.View[1]/android.view.View[1]/android.view.View[3]"],
  contactsText: ["android=new UiSelector().text(\"Contacts\")", "//android.widget.TextView[@text=\"Contacts\"]"],
  btn4: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/androidx.drawerlayout.widget.DrawerLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.support.v7.widget.RecyclerView[1]/androidx.compose.ui.platform.ComposeView[1]/android.view.View[1]/android.view.View[1]/android.view.View[4]"],
  nonSpamText: ["android=new UiSelector().text(\"Non-spam\")", "//android.widget.TextView[@text=\"Non-spam\"]"],
  bannerView: ["~Banner", "//android.view.View[@content-desc=\"Banner\"]"],
  createYourCallingCardText: ["android=new UiSelector().text(\"Create your calling card\")", "//android.widget.TextView[@text=\"Create your calling card\"]"],
  btn5: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/androidx.drawerlayout.widget.DrawerLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.support.v7.widget.RecyclerView[1]/android.widget.FrameLayout[1]/androidx.compose.ui.platform.ComposeView[1]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View[2]"],
  closeView: ["~Close", "//android.view.View[@content-desc=\"Close\"]"],
  customizeHowYouLlText: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/androidx.drawerlayout.widget.DrawerLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.support.v7.widget.RecyclerView[1]/android.widget.FrameLayout[1]/androidx.compose.ui.platform.ComposeView[1]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.widget.TextView[2]"],
  btn6: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/androidx.drawerlayout.widget.DrawerLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.support.v7.widget.RecyclerView[1]/android.widget.FrameLayout[1]/androidx.compose.ui.platform.ComposeView[1]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View[3]"],
  getStartedText: ["android=new UiSelector().text(\"Get started\")", "//android.widget.TextView[@text=\"Get started\"]"],
  btn7: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/androidx.drawerlayout.widget.DrawerLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.support.v7.widget.RecyclerView[1]/android.widget.FrameLayout[2]/androidx.compose.ui.platform.ComposeView[1]/android.view.View[1]/android.view.View[1]"],
  favoritesText: ["android=new UiSelector().text(\"Favorites\")", "//android.widget.TextView[@text=\"Favorites\"]"],
  btn8: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/androidx.drawerlayout.widget.DrawerLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.support.v7.widget.RecyclerView[1]/android.widget.FrameLayout[2]/androidx.compose.ui.platform.ComposeView[1]/android.view.View[1]/android.view.View[2]"],
  viewContactsText: ["android=new UiSelector().text(\"View contacts\")", "//android.widget.TextView[@text=\"View contacts\"]"],
  btn9: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/androidx.drawerlayout.widget.DrawerLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.support.v7.widget.RecyclerView[1]/android.widget.FrameLayout[2]/androidx.compose.ui.platform.ComposeView[1]/android.view.View[1]/android.view.View[3]/android.view.View[1]/android.view.View[1]"],
  addText: ["android=new UiSelector().text(\"Add\")", "//android.widget.TextView[@text=\"Add\"]"],
  callsYouMakeWillText: ["android=new UiSelector().text(\"Calls you make will show up here\")", "//android.widget.TextView[@text=\"Calls you make will show up here\"]"],
  btn10: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/androidx.drawerlayout.widget.DrawerLayout[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.support.v7.widget.RecyclerView[1]/androidx.compose.ui.platform.ComposeView[2]/android.view.View[1]/android.view.View[1]"],
  makeACallText: ["android=new UiSelector().text(\"Make a call\")", "//android.widget.TextView[@text=\"Make a call\"]"],
  searchBarInput: ["id=com.google.android.dialer:id/search_bar", "//android.widget.EditText[@resource-id=\"com.google.android.dialer:id/search_bar\" and @text=\"Search contacts\"]", "android=new UiSelector().text(\"Search contacts\")"],
  openNavigationDrawerBtn: ["~Open navigation drawer", "//android.widget.ImageButton[@content-desc=\"Open navigation drawer\"]"],
  openSearchBarContainerView: ["id=com.google.android.dialer:id/open_search_bar_text_view_container", "//android.widget.FrameLayout[@resource-id=\"com.google.android.dialer:id/open_search_bar_text_view_container\"]"],
  openSearchBarText: ["id=com.google.android.dialer:id/open_search_bar_text_view", "//android.widget.TextView[@resource-id=\"com.google.android.dialer:id/open_search_bar_text_view\" and @text=\"Search contacts\"]", "android=new UiSelector().text(\"Search contacts\")"],
  actionVoiceBtn: ["~Start voice search", "id=com.google.android.dialer:id/action_voice", "//android.widget.Button[@resource-id=\"com.google.android.dialer:id/action_voice\" and @content-desc=\"Start voice search\"]"],
  navigationBarLayoutView: ["id=com.google.android.dialer:id/navigation_bar_layout", "//android.widget.FrameLayout[@resource-id=\"com.google.android.dialer:id/navigation_bar_layout\"]"],
  tabCallHistoryView: ["~Home", "id=com.google.android.dialer:id/tab_call_history", "//android.widget.FrameLayout[@resource-id=\"com.google.android.dialer:id/tab_call_history\" and @content-desc=\"Home\"]"],
  navigationBarItemContentContainerView: ["(//android.widget.LinearLayout[@resource-id=\"com.google.android.dialer:id/navigation_bar_item_content_container\"])[1]", "android=new UiSelector().resourceId(\"com.google.android.dialer:id/navigation_bar_item_content_container\").instance(0)", "id=com.google.android.dialer:id/navigation_bar_item_content_container"],
  navigationBarItemIconContainerView: ["(//android.widget.FrameLayout[@resource-id=\"com.google.android.dialer:id/navigation_bar_item_icon_container\"])[1]", "android=new UiSelector().resourceId(\"com.google.android.dialer:id/navigation_bar_item_icon_container\").instance(0)", "id=com.google.android.dialer:id/navigation_bar_item_icon_container"],
  navigationBarItemActiveIndicatorView: ["id=com.google.android.dialer:id/navigation_bar_item_active_indicator_view", "//android.view.View[@resource-id=\"com.google.android.dialer:id/navigation_bar_item_active_indicator_view\"]"],
  navigationBarItemInnerContentContainerView: ["(//android.widget.LinearLayout[@resource-id=\"com.google.android.dialer:id/navigation_bar_item_inner_content_container\"])[1]", "android=new UiSelector().resourceId(\"com.google.android.dialer:id/navigation_bar_item_inner_content_container\").instance(0)", "id=com.google.android.dialer:id/navigation_bar_item_inner_content_container"],
  navigationBarItemIconImage: ["(//android.widget.ImageView[@resource-id=\"com.google.android.dialer:id/navigation_bar_item_icon_view\"])[1]", "android=new UiSelector().resourceId(\"com.google.android.dialer:id/navigation_bar_item_icon_view\").instance(0)", "id=com.google.android.dialer:id/navigation_bar_item_icon_view"],
  navigationBarItemLabelsGroupView: ["(//android.view.ViewGroup[@resource-id=\"com.google.android.dialer:id/navigation_bar_item_labels_group\"])[1]", "android=new UiSelector().resourceId(\"com.google.android.dialer:id/navigation_bar_item_labels_group\").instance(0)", "id=com.google.android.dialer:id/navigation_bar_item_labels_group"],
  navigationBarItemLargeLabelText: ["id=com.google.android.dialer:id/navigation_bar_item_large_label_view", "android=new UiSelector().text(\"Home\")", "//android.widget.TextView[@resource-id=\"com.google.android.dialer:id/navigation_bar_item_large_label_view\" and @text=\"Home\"]"],
  tabDialpadBtn: ["~Keypad", "id=com.google.android.dialer:id/tab_dialpad", "//android.widget.FrameLayout[@resource-id=\"com.google.android.dialer:id/tab_dialpad\" and @content-desc=\"Keypad\"]"],
  navigationBarItemSmallLabelText: ["android=new UiSelector().resourceId(\"com.google.android.dialer:id/navigation_bar_item_small_label_view\").text(\"Keypad\")", "android=new UiSelector().text(\"Keypad\")", "//android.widget.TextView[@resource-id=\"com.google.android.dialer:id/navigation_bar_item_small_label_view\" and @text=\"Keypad\"]", "android=new UiSelector().resourceId(\"com.google.android.dialer:id/navigation_bar_item_small_label_view\").instance(0)"],
  tabVoicemailBtn: ["~Voicemail", "id=com.google.android.dialer:id/tab_voicemail", "//android.widget.FrameLayout[@resource-id=\"com.google.android.dialer:id/tab_voicemail\" and @content-desc=\"Voicemail\"]"],
  navigationBarItemSmallLabelText2: ["android=new UiSelector().resourceId(\"com.google.android.dialer:id/navigation_bar_item_small_label_view\").text(\"Voicemail\")", "android=new UiSelector().text(\"Voicemail\")", "//android.widget.TextView[@resource-id=\"com.google.android.dialer:id/navigation_bar_item_small_label_view\" and @text=\"Voicemail\"]", "android=new UiSelector().resourceId(\"com.google.android.dialer:id/navigation_bar_item_small_label_view\").instance(1)"],
};

class MainScreen31 extends BasePage {
  constructor() {
    super(L, ["searchBarInput","openNavigationDrawerBtn","actionVoiceBtn"]);
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
  get parentConstraintLayoutView() {
    return $(L.parentConstraintLayoutView[0]);
  }

  /** ViewGroup */
  get callLogSnackbarContainerView() {
    return $(L.callLogSnackbarContainerView[0]);
  }

  /** RecyclerView */
  get callLogRecyclerList() {
    return $(L.callLogRecyclerList[0]);
  }

  /** View */
  get view() {
    return $(L.view[0]);
  }

  /** View */
  get btn() {
    return $(L.btn[0]);
  }

  /** TextView "All" */
  get allText() {
    return $(L.allText[0]);
  }

  /** View */
  get btn2() {
    return $(L.btn2[0]);
  }

  /** TextView "Missed" */
  get missedText() {
    return $(L.missedText[0]);
  }

  /** View */
  get btn3() {
    return $(L.btn3[0]);
  }

  /** TextView "Contacts" */
  get contactsText() {
    return $(L.contactsText[0]);
  }

  /** View */
  get btn4() {
    return $(L.btn4[0]);
  }

  /** TextView "Non-spam" */
  get nonSpamText() {
    return $(L.nonSpamText[0]);
  }

  /** View */
  get bannerView() {
    return $(L.bannerView[0]);
  }

  /** TextView "Create your calling card" */
  get createYourCallingCardText() {
    return $(L.createYourCallingCardText[0]);
  }

  /** View */
  get btn5() {
    return $(L.btn5[0]);
  }

  /** View */
  get closeView() {
    return $(L.closeView[0]);
  }

  /** TextView "Customize how you'll appear to others wh" */
  get customizeHowYouLlText() {
    return $(L.customizeHowYouLlText[0]);
  }

  /** View */
  get btn6() {
    return $(L.btn6[0]);
  }

  /** TextView "Get started" */
  get getStartedText() {
    return $(L.getStartedText[0]);
  }

  /** View */
  get btn7() {
    return $(L.btn7[0]);
  }

  /** TextView "Favorites" */
  get favoritesText() {
    return $(L.favoritesText[0]);
  }

  /** View */
  get btn8() {
    return $(L.btn8[0]);
  }

  /** TextView "View contacts" */
  get viewContactsText() {
    return $(L.viewContactsText[0]);
  }

  /** View */
  get btn9() {
    return $(L.btn9[0]);
  }

  /** TextView "Add" */
  get addText() {
    return $(L.addText[0]);
  }

  /** TextView "Calls you make will show up here" */
  get callsYouMakeWillText() {
    return $(L.callsYouMakeWillText[0]);
  }

  /** View */
  get btn10() {
    return $(L.btn10[0]);
  }

  /** TextView "Make a call" */
  get makeACallText() {
    return $(L.makeACallText[0]);
  }

  /** EditText "Search contacts" */
  get searchBarInput() {
    return $(L.searchBarInput[0]);
  }

  /** ImageButton */
  get openNavigationDrawerBtn() {
    return $(L.openNavigationDrawerBtn[0]);
  }

  /** FrameLayout */
  get openSearchBarContainerView() {
    return $(L.openSearchBarContainerView[0]);
  }

  /** TextView "Search contacts" */
  get openSearchBarText() {
    return $(L.openSearchBarText[0]);
  }

  /** Button */
  get actionVoiceBtn() {
    return $(L.actionVoiceBtn[0]);
  }

  /** FrameLayout */
  get navigationBarLayoutView() {
    return $(L.navigationBarLayoutView[0]);
  }

  /** FrameLayout */
  get tabCallHistoryView() {
    return $(L.tabCallHistoryView[0]);
  }

  /** LinearLayout */
  get navigationBarItemContentContainerView() {
    return $(L.navigationBarItemContentContainerView[0]);
  }

  /** FrameLayout */
  get navigationBarItemIconContainerView() {
    return $(L.navigationBarItemIconContainerView[0]);
  }

  /** View */
  get navigationBarItemActiveIndicatorView() {
    return $(L.navigationBarItemActiveIndicatorView[0]);
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
  get navigationBarItemLargeLabelText() {
    return $(L.navigationBarItemLargeLabelText[0]);
  }

  /** FrameLayout */
  get tabDialpadBtn() {
    return $(L.tabDialpadBtn[0]);
  }

  /** TextView "Keypad" */
  get navigationBarItemSmallLabelText() {
    return $(L.navigationBarItemSmallLabelText[0]);
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

export { MainScreen31 as MainScreen31Class, L as MainScreen31Locators };
export default new MainScreen31();
