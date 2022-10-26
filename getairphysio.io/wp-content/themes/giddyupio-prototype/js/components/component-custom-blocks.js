jQuery(function ($) {
  $(document).ready(function () {
    if ($(".easysteps-section").length) {
      let module = ".easysteps-section";
      let block_id = $(module).data("block-id");
      $("#easysteps-modal-" + block_id, $(module)).appendTo("body");
      let mobile_link_text = $(
        $(".modal-link-placeholder", $(module)).length
          ? $(".modal-link-placeholder", $(module))
          : $(".button-continue a", $(module))
      ).text();
      if (mobile_link_text != "") {
        $(".easysteps-modal-link span", $(module)).text(
          guSubstituteString(mobile_link_text)
        );
      } else {
        $(".easysteps-modal-link span", $(module)).remove();
      }
    }
    $(document)
      .on("shown.bs.modal", ".video-modal", function (e) {
        let videosrc = $("iframe", $(this)).attr("src");
        if ($("iframe", $(this)).attr("data-src") === undefined) {
          videosrc +=
            (videosrc.indexOf("?") > -1 ? "&" : "?") +
            "autoplay=1&modestbranding=1&showinfo=0&rel=0";
          $("iframe", $(this)).attr("data-src", videosrc);
        }
        let autoplay = $("iframe", $(this)).data("src");
        $("iframe", $(this)).attr("src", autoplay);
        $("iframe", $(this)).attr("loading", "lazy");
      })
      .on("hide.bs.modal", ".video-modal", function (e) {
        $("iframe", $(this)).attr("src", "");
      });
  });
});
