import BasePage, { S } from '../BasePage.js';

// Android system dialogs the app triggers (captured: GrantPermissionsScreen, GrantPermissionsScreen2,
// PermissionsScreen, AllowEGenomeToReadScreen). Ids are matched by suffix so they work for both
// com.android.permissioncontroller and com.google.android.permissioncontroller builds.
const pc = (id) => S.idMatches(`.*:id/${id}`);

const SEL = {
  // Notifications ("Allow eGenome to send you notifications?")
  allow: pc('permission_allow_button'),
  denyDontAsk: pc('permission_deny_and_dont_ask_again_button'),
  // Location
  whileUsingApp: pc('permission_allow_foreground_only_button'),
  onlyThisTime: pc('permission_allow_one_time_button'),
  deny: pc('permission_deny_button'),
  precise: pc('permission_location_accuracy_radio_fine'),
  approximate: pc('permission_location_accuracy_radio_coarse'),
  message: pc('permission_message'),
  // Health Connect bottom sheet
  hcAllowAll: pc('settingslib_main_switch_bar'),
  hcAllowAllSwitch: pc('switch_widget'),
  hcAllow: pc('primary_button_outline'),
  hcDontAllow: pc('secondary_button'),
};

class SystemDialogs extends BasePage {
  get anchors() {
    return [SEL.message, SEL.hcAllow];
  }

  get permissionMessage() { return $(SEL.message); }

  /**
   * Answer every permission dialog that shows up (notifications, location, Health Connect).
   * @param {{allow?: boolean, timeout?: number, maxDialogs?: number}} opts
   * @returns {Promise<string[]>} the dialogs that were handled
   */
  async handleAll({ allow = true, timeout = 4000, maxDialogs = 4 } = {}) {
    const handled = [];
    for (let i = 0; i < maxDialogs; i++) {
      if (!(await this.isOpen(i === 0 ? timeout : 2000))) break;

      if (await this.exists(SEL.whileUsingApp)) {
        await this.tap(allow ? SEL.whileUsingApp : SEL.deny);
        handled.push('location');
      } else if (await this.exists(SEL.allow)) {
        await this.tap(allow ? SEL.allow : SEL.denyDontAsk);
        handled.push('notifications');
      } else if (await this.exists(SEL.hcAllow)) {
        // Turn on "Allow all" so every requested data type (steps, activity...) is granted
        if (allow && (await this.exists(SEL.hcAllowAll))) {
          const sw = await $(SEL.hcAllowAllSwitch);
          if (!(await sw.isExisting()) || (await sw.getAttribute('checked')) !== 'true') await this.tap(SEL.hcAllowAll);
        }
        await this.tap(allow ? SEL.hcAllow : SEL.hcDontAllow);
        handled.push('health-connect');
      } else {
        break;
      }
    }
    return handled;
  }
}

export default new SystemDialogs();

// Locator map (used by the deliverables locator catalog)
export const LOCATORS = SEL;
