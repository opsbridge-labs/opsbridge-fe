import $ from "jquery";

export const bindLegacyAjaxTrace = (selector: string) => {
  $(selector).on("click", "[data-refresh]", async () => {
    await $.ajax({ url: "/api/dashboard", method: "GET", headers: { "x-legacy-surface": "jquery-report" } });
  });
};
