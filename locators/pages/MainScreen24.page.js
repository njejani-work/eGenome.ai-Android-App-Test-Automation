// AUTO-GENERATED from locators/MainScreen24.json by scripts/locator-capture.
// Do not edit: it is regenerated on every capture. Extend this class for actions, e.g.
//   class Login extends MainScreen24Class { async login(phone) { ... } }
// Screen: (no title) | activity: com.android.photopicker.MainActivity | updated: 2026-10-28T07:52:10.549Z
import BasePage from './BasePage.js';

const L = {
  btn: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/androidx.compose.ui.platform.ComposeView[1]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View[1]"],
  dragHandleView: ["~Drag handle", "//android.view.View[@content-desc=\"Drag handle\"]"],
  photosView: ["~Photos", "//android.view.View[@content-desc=\"Photos\"]"],
  collectionsBtn: ["~Collections", "//android.view.View[@content-desc=\"Collections\"]"],
  btn2: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/androidx.compose.ui.platform.ComposeView[1]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View[3]"],
  moreView: ["~More", "//android.view.View[@content-desc=\"More\"]"],
  mediaGridView: ["~Media grid", "//android.view.View[@content-desc=\"Media grid\"]"],
  noPhotosYetText: ["android=new UiSelector().text(\"No photos yet\")", "//android.widget.TextView[@text=\"No photos yet\"]"],
  startCapturingPhotosAndText: ["android=new UiSelector().text(\"Start capturing photos and videos\")", "//android.widget.TextView[@text=\"Start capturing photos and videos\"]"],
  btn3: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/androidx.compose.ui.platform.ComposeView[1]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View[4]/android.view.View[1]/android.view.View[1]"],
  favoritesText: ["android=new UiSelector().text(\"Favorites\")", "//android.widget.TextView[@text=\"Favorites\"]"],
  btn4: ["/hierarchy/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/androidx.compose.ui.platform.ComposeView[1]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View[4]/android.view.View[1]/android.view.View[2]"],
  cameraText: ["android=new UiSelector().text(\"Camera\")", "//android.widget.TextView[@text=\"Camera\"]"],
};

class MainScreen24 extends BasePage {
  constructor() {
    super(L, ["collectionsBtn","dragHandleView","photosView"]);
  }

  /** View */
  get btn() {
    return $(L.btn[0]);
  }

  /** View */
  get dragHandleView() {
    return $(L.dragHandleView[0]);
  }

  /** View */
  get photosView() {
    return $(L.photosView[0]);
  }

  /** View */
  get collectionsBtn() {
    return $(L.collectionsBtn[0]);
  }

  /** View */
  get btn2() {
    return $(L.btn2[0]);
  }

  /** View */
  get moreView() {
    return $(L.moreView[0]);
  }

  /** View */
  get mediaGridView() {
    return $(L.mediaGridView[0]);
  }

  /** TextView "No photos yet" */
  get noPhotosYetText() {
    return $(L.noPhotosYetText[0]);
  }

  /** TextView "Start capturing photos and videos" */
  get startCapturingPhotosAndText() {
    return $(L.startCapturingPhotosAndText[0]);
  }

  /** View */
  get btn3() {
    return $(L.btn3[0]);
  }

  /** TextView "Favorites" */
  get favoritesText() {
    return $(L.favoritesText[0]);
  }

  /** View */
  get btn4() {
    return $(L.btn4[0]);
  }

  /** TextView "Camera" */
  get cameraText() {
    return $(L.cameraText[0]);
  }
}

export { MainScreen24 as MainScreen24Class, L as MainScreen24Locators };
export default new MainScreen24();
