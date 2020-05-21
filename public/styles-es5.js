(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
  /***/
  "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
  /*!*****************************************************************************************************************************************************************!*\
    !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
    \*****************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularDevkitBuildAngularSrcAngularCliFilesPluginsRawCssLoaderJsNode_modulesPostcssLoaderSrcIndexJsSrcStylesCss(module, exports) {
    module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n\n/**\n * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.\n * This file is licensed under the terms of the MIT License (see LICENSE.md).\n */\n\n:root {\n  --ck-sample-base-spacing: 2em;\n  --ck-sample-color-white: #fff;\n  --ck-sample-color-green: #279863;\n  --ck-sample-container-width: 1285px;\n  --ck-sample-sidebar-width: 290px;\n  --ck-sample-editor-min-height: 200px;\n}\n\nbody, html {\n  padding: 0;\n  margin: 0;\n  font-family: sans-serif, Arial, Verdana, \"Trebuchet MS\", \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 16px;\n  line-height: 1.5;\n}\n\nbody {\n  height: 100%;\n  color: #2D3A4A;\n}\n\nbody * {\n  box-sizing: border-box;\n}\n\na {\n  color: #38A5EE;\n}\n\n.ck-heading-dropdown {\n    width: 105px !important;\n}\n\n/* --------- STYLES TO DISPLAY THE EDITOR BEFORE LOAD ---------------------------------------------------------------------------- */\n\n.row-editor>ckeditor>div:first-child {\n  border: 1px solid hsl(0, 0%, 70%);\n}\n\n.row-editor>ckeditor>div:first-child,\n.row-editor>ckeditor {\n  background: #fff;\n  width: 100%;\n  min-height: var(--ck-sample-editor-min-height);\n}\n\n.ck.ck-editor {\n  /* Because of sidebar `position: relative`, Edge is overriding the outline of a focused editor. */\n  position: relative;\n  z-index: 10;\n}\n\n.row-editor .image.image-style-side {\n  float: right;\n  width: 50%;\n}\n\n.row-editor .image img {\n  width: 100%;\n  max-width: 100%;\n}\n\n.centered {\n  /* Hide overlapping comments. */\n  overflow: hidden;\n  max-width: var(--ck-sample-container-width);\n  margin: 0 auto;\n  padding: 0 var(--ck-sample-base-spacing);\n}\n\n.row {\n  display: flex;\n  position: relative;\n}\n\n.sidebar {\n\tpadding: 0 10px;\n\tposition: relative;\n\tmin-width: var(--ck-sample-sidebar-width);\n\tfont-size: 20px;\n\tbackground: hsl(0, 0%, 98%);\n\tborder: 1px solid hsl(0, 0%, 77%);\n\tborder-left: 0;\n\tborder-top: 0;\n\toverflow: hidden;\n\tmin-height: 100%;\n\n\t/* #2733. Do not overlap the left border if the sidebar is longer than content. */\n\tbox-shadow: -1px 0 0 0 hsl(0, 0%, 77%);\n}\n\n.sidebar.narrow {\n\tmin-width: 60px;\n}\n\n.sidebar.hidden {\n\tdisplay: none;\n}\n\n.row-presence {\n\twidth: 100%;\n\tborder: 1px solid hsl(0, 0%, 77%);\n\tborder-bottom: 0;\n\tbackground: hsl(0, 0%, 98%);\n\tpadding: var(--ck-spacing-small);\n\n\t/* Make `border-bottom` as `box-shadow` to not overlap with the editor border. */\n\tbox-shadow: 0 1px 0 0 hsl(0, 0%, 77%);\n\n\t/* Make `z-index` bigger than `.editor` to properly display tooltips. */\n\tz-index: 20;\n}\n\n.presence .ck.ck-presence-list__counter {\n\torder: 2;\n\tmargin-left: var(--ck-spacing-large)\n}\n\n.row-editor>div:first-child,\n/* Classic demo. */\n\nmain .ck-editor[role='application'] .ck.ck-content {\n  background: #fff;\n  font-size: 1em;\n  line-height: 1.6em;\n  min-height: var(--ck-sample-editor-min-height);\n  padding: 1.5em 2em;\n}\n\n/* --------- SAMPLE GENERIC STYLES ---------------------------------------------------------------------------- */\n\nheader .centered {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n  min-height: 8em;\n}\n\nheader h1 a {\n  font-size: 20px;\n  display: flex;\n  align-items: center;\n  color: #2D3A4A;\n  text-decoration: none;\n}\n\nheader h1 img {\n  display: block;\n  height: 64px;\n}\n\nheader nav ul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\nheader nav ul li {\n  display: inline-block;\n}\n\nheader nav ul li+li {\n  margin-left: 1em;\n}\n\nheader nav ul li a {\n  font-weight: bold;\n  text-decoration: none;\n  color: #2D3A4A;\n}\n\nheader nav ul li a:hover {\n  text-decoration: underline;\n}\n\nmain .message {\n  padding: 0 0 var(--ck-sample-base-spacing);\n  background: var(--ck-sample-color-green);\n  color: var(--ck-sample-color-white);\n}\n\nmain .message::after {\n  content: \"\";\n  z-index: -1;\n  display: block;\n  height: 10em;\n  width: 100%;\n  background: var(--ck-sample-color-green);\n  position: absolute;\n  left: 0;\n}\n\nmain .message h1 {\n  position: relative;\n  padding-top: 1em;\n  font-size: 2em;\n}\n\nfooter {\n  margin: calc(2*var(--ck-sample-base-spacing)) var(--ck-sample-base-spacing);\n  font-size: .8em;\n  text-align: center;\n  color: rgba(0, 0, 0, .4);\n}\n\n/* --------- RWD ---------- */\n\n@media screen and ( max-width: 800px ) {\n\t:root {\n\t\t--ck-sample-base-spacing: 1em;\n\t}\n\n\theader h1 {\n\t\twidth: 100%;\n\t}\n\n\theader h1 img {\n\t\theight: 40px;\n\t}\n\n\theader nav ul {\n\t\ttext-align: right;\n\t}\n\n\tmain .message h2 {\n\t\tfont-size: 1.5em;\n\t}\n\n\tmain .row .ck.ck-editor__editable[ role='textbox' ] {\n\t\tpadding: 0.5em 1em 1em;\n\t}\n}\n\n/*# sourceMappingURL=data:application/json;base64,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QkFBZ0I7Q0FDakI7O0NBRUE7RUFDQyxzQkFBc0I7Q0FDdkI7QUFDRCIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuLyoqXG4gKiBAbGljZW5zZSBDb3B5cmlnaHQgKGMpIDIwMDMtMjAxOSwgQ0tTb3VyY2UgLSBGcmVkZXJpY28gS25hYmJlbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgZmlsZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBMaWNlbnNlIChzZWUgTElDRU5TRS5tZCkuXG4gKi9cblxuOnJvb3Qge1xuICAtLWNrLXNhbXBsZS1iYXNlLXNwYWNpbmc6IDJlbTtcbiAgLS1jay1zYW1wbGUtY29sb3Itd2hpdGU6ICNmZmY7XG4gIC0tY2stc2FtcGxlLWNvbG9yLWdyZWVuOiAjMjc5ODYzO1xuICAtLWNrLXNhbXBsZS1jb250YWluZXItd2lkdGg6IDEyODVweDtcbiAgLS1jay1zYW1wbGUtc2lkZWJhci13aWR0aDogMjkwcHg7XG4gIC0tY2stc2FtcGxlLWVkaXRvci1taW4taGVpZ2h0OiAyMDBweDtcbn1cblxuYm9keSwgaHRtbCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWYsIEFyaWFsLCBWZXJkYW5hLCBcIlRyZWJ1Y2hldCBNU1wiLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogIzJEM0E0QTtcbn1cblxuYm9keSAqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYSB7XG4gIGNvbG9yOiAjMzhBNUVFO1xufVxuXG4uY2staGVhZGluZy1kcm9wZG93biB7XG4gICAgd2lkdGg6IDEwNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi8qIC0tLS0tLS0tLSBTVFlMRVMgVE8gRElTUExBWSBUSEUgRURJVE9SIEJFRk9SRSBMT0FEIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLnJvdy1lZGl0b3I+Y2tlZGl0b3I+ZGl2OmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgaHNsKDAsIDAlLCA3MCUpO1xufVxuXG4ucm93LWVkaXRvcj5ja2VkaXRvcj5kaXY6Zmlyc3QtY2hpbGQsXG4ucm93LWVkaXRvcj5ja2VkaXRvciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiB2YXIoLS1jay1zYW1wbGUtZWRpdG9yLW1pbi1oZWlnaHQpO1xufVxuXG4uY2suY2stZWRpdG9yIHtcbiAgLyogQmVjYXVzZSBvZiBzaWRlYmFyIGBwb3NpdGlvbjogcmVsYXRpdmVgLCBFZGdlIGlzIG92ZXJyaWRpbmcgdGhlIG91dGxpbmUgb2YgYSBmb2N1c2VkIGVkaXRvci4gKi9cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLnJvdy1lZGl0b3IgLmltYWdlLmltYWdlLXN0eWxlLXNpZGUge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5yb3ctZWRpdG9yIC5pbWFnZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uY2VudGVyZWQge1xuICAvKiBIaWRlIG92ZXJsYXBwaW5nIGNvbW1lbnRzLiAqL1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXgtd2lkdGg6IHZhcigtLWNrLXNhbXBsZS1jb250YWluZXItd2lkdGgpO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCB2YXIoLS1jay1zYW1wbGUtYmFzZS1zcGFjaW5nKTtcbn1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNpZGViYXIge1xuXHRwYWRkaW5nOiAwIDEwcHg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0bWluLXdpZHRoOiB2YXIoLS1jay1zYW1wbGUtc2lkZWJhci13aWR0aCk7XG5cdGZvbnQtc2l6ZTogMjBweDtcblx0YmFja2dyb3VuZDogaHNsKDAsIDAlLCA5OCUpO1xuXHRib3JkZXI6IDFweCBzb2xpZCBoc2woMCwgMCUsIDc3JSk7XG5cdGJvcmRlci1sZWZ0OiAwO1xuXHRib3JkZXItdG9wOiAwO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRtaW4taGVpZ2h0OiAxMDAlO1xuXG5cdC8qICMyNzMzLiBEbyBub3Qgb3ZlcmxhcCB0aGUgbGVmdCBib3JkZXIgaWYgdGhlIHNpZGViYXIgaXMgbG9uZ2VyIHRoYW4gY29udGVudC4gKi9cblx0Ym94LXNoYWRvdzogLTFweCAwIDAgMCBoc2woMCwgMCUsIDc3JSk7XG59XG5cbi5zaWRlYmFyLm5hcnJvdyB7XG5cdG1pbi13aWR0aDogNjBweDtcbn1cblxuLnNpZGViYXIuaGlkZGVuIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuLnJvdy1wcmVzZW5jZSB7XG5cdHdpZHRoOiAxMDAlO1xuXHRib3JkZXI6IDFweCBzb2xpZCBoc2woMCwgMCUsIDc3JSk7XG5cdGJvcmRlci1ib3R0b206IDA7XG5cdGJhY2tncm91bmQ6IGhzbCgwLCAwJSwgOTglKTtcblx0cGFkZGluZzogdmFyKC0tY2stc3BhY2luZy1zbWFsbCk7XG5cblx0LyogTWFrZSBgYm9yZGVyLWJvdHRvbWAgYXMgYGJveC1zaGFkb3dgIHRvIG5vdCBvdmVybGFwIHdpdGggdGhlIGVkaXRvciBib3JkZXIuICovXG5cdGJveC1zaGFkb3c6IDAgMXB4IDAgMCBoc2woMCwgMCUsIDc3JSk7XG5cblx0LyogTWFrZSBgei1pbmRleGAgYmlnZ2VyIHRoYW4gYC5lZGl0b3JgIHRvIHByb3Blcmx5IGRpc3BsYXkgdG9vbHRpcHMuICovXG5cdHotaW5kZXg6IDIwO1xufVxuXG4ucHJlc2VuY2UgLmNrLmNrLXByZXNlbmNlLWxpc3RfX2NvdW50ZXIge1xuXHRvcmRlcjogMjtcblx0bWFyZ2luLWxlZnQ6IHZhcigtLWNrLXNwYWNpbmctbGFyZ2UpXG59XG5cbi5yb3ctZWRpdG9yPmRpdjpmaXJzdC1jaGlsZCxcbi8qIENsYXNzaWMgZGVtby4gKi9cblxubWFpbiAuY2stZWRpdG9yW3JvbGU9J2FwcGxpY2F0aW9uJ10gLmNrLmNrLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBmb250LXNpemU6IDFlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNmVtO1xuICBtaW4taGVpZ2h0OiB2YXIoLS1jay1zYW1wbGUtZWRpdG9yLW1pbi1oZWlnaHQpO1xuICBwYWRkaW5nOiAxLjVlbSAyZW07XG59XG5cbi8qIC0tLS0tLS0tLSBTQU1QTEUgR0VORVJJQyBTVFlMRVMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5oZWFkZXIgLmNlbnRlcmVkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDhlbTtcbn1cblxuaGVhZGVyIGgxIGEge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjMkQzQTRBO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmhlYWRlciBoMSBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA2NHB4O1xufVxuXG5oZWFkZXIgbmF2IHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbmhlYWRlciBuYXYgdWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmhlYWRlciBuYXYgdWwgbGkrbGkge1xuICBtYXJnaW4tbGVmdDogMWVtO1xufVxuXG5oZWFkZXIgbmF2IHVsIGxpIGEge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzJEM0E0QTtcbn1cblxuaGVhZGVyIG5hdiB1bCBsaSBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbm1haW4gLm1lc3NhZ2Uge1xuICBwYWRkaW5nOiAwIDAgdmFyKC0tY2stc2FtcGxlLWJhc2Utc3BhY2luZyk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNrLXNhbXBsZS1jb2xvci1ncmVlbik7XG4gIGNvbG9yOiB2YXIoLS1jay1zYW1wbGUtY29sb3Itd2hpdGUpO1xufVxuXG5tYWluIC5tZXNzYWdlOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHotaW5kZXg6IC0xO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMGVtO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2stc2FtcGxlLWNvbG9yLWdyZWVuKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xufVxuXG5tYWluIC5tZXNzYWdlIGgxIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXRvcDogMWVtO1xuICBmb250LXNpemU6IDJlbTtcbn1cblxuZm9vdGVyIHtcbiAgbWFyZ2luOiBjYWxjKDIqdmFyKC0tY2stc2FtcGxlLWJhc2Utc3BhY2luZykpIHZhcigtLWNrLXNhbXBsZS1iYXNlLXNwYWNpbmcpO1xuICBmb250LXNpemU6IC44ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjQpO1xufVxuXG4vKiAtLS0tLS0tLS0gUldEIC0tLS0tLS0tLS0gKi9cbkBtZWRpYSBzY3JlZW4gYW5kICggbWF4LXdpZHRoOiA4MDBweCApIHtcblx0OnJvb3Qge1xuXHRcdC0tY2stc2FtcGxlLWJhc2Utc3BhY2luZzogMWVtO1xuXHR9XG5cblx0aGVhZGVyIGgxIHtcblx0XHR3aWR0aDogMTAwJTtcblx0fVxuXG5cdGhlYWRlciBoMSBpbWcge1xuXHRcdGhlaWdodDogNDBweDtcblx0fVxuXG5cdGhlYWRlciBuYXYgdWwge1xuXHRcdHRleHQtYWxpZ246IHJpZ2h0O1xuXHR9XG5cblx0bWFpbiAubWVzc2FnZSBoMiB7XG5cdFx0Zm9udC1zaXplOiAxLjVlbTtcblx0fVxuXG5cdG1haW4gLnJvdyAuY2suY2stZWRpdG9yX19lZGl0YWJsZVsgcm9sZT0ndGV4dGJveCcgXSB7XG5cdFx0cGFkZGluZzogMC41ZW0gMWVtIDFlbTtcblx0fVxufVxuIl19 */", '', '']];
    /***/
  },

  /***/
  "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, exports, __webpack_require__) {
    "use strict";

    var stylesInDom = {};

    var isOldIE = function isOldIE() {
      var memo;
      return function memorize() {
        if (typeof memo === 'undefined') {
          // Test for IE <= 9 as proposed by Browserhacks
          // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
          // Tests for existence of standard globals is to allow style-loader
          // to operate correctly into non-standard environments
          // @see https://github.com/webpack-contrib/style-loader/issues/177
          memo = Boolean(window && document && document.all && !window.atob);
        }

        return memo;
      };
    }();

    var getTarget = function getTarget() {
      var memo = {};
      return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
          var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              // istanbul ignore next
              styleTarget = null;
            }
          }

          memo[target] = styleTarget;
        }

        return memo[target];
      };
    }();

    function listToStyles(list, options) {
      var styles = [];
      var newStyles = {};

      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var id = options.base ? item[0] + options.base : item[0];
        var css = item[1];
        var media = item[2];
        var sourceMap = item[3];
        var part = {
          css: css,
          media: media,
          sourceMap: sourceMap
        };

        if (!newStyles[id]) {
          styles.push(newStyles[id] = {
            id: id,
            parts: [part]
          });
        } else {
          newStyles[id].parts.push(part);
        }
      }

      return styles;
    }

    function addStylesToDom(styles, options) {
      for (var i = 0; i < styles.length; i++) {
        var item = styles[i];
        var domStyle = stylesInDom[item.id];
        var j = 0;

        if (domStyle) {
          domStyle.refs++;

          for (; j < domStyle.parts.length; j++) {
            domStyle.parts[j](item.parts[j]);
          }

          for (; j < item.parts.length; j++) {
            domStyle.parts.push(addStyle(item.parts[j], options));
          }
        } else {
          var parts = [];

          for (; j < item.parts.length; j++) {
            parts.push(addStyle(item.parts[j], options));
          }

          stylesInDom[item.id] = {
            id: item.id,
            refs: 1,
            parts: parts
          };
        }
      }
    }

    function insertStyleElement(options) {
      var style = document.createElement('style');

      if (typeof options.attributes.nonce === 'undefined') {
        var nonce = true ? __webpack_require__.nc : undefined;

        if (nonce) {
          options.attributes.nonce = nonce;
        }
      }

      Object.keys(options.attributes).forEach(function (key) {
        style.setAttribute(key, options.attributes[key]);
      });

      if (typeof options.insert === 'function') {
        options.insert(style);
      } else {
        var target = getTarget(options.insert || 'head');

        if (!target) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }

        target.appendChild(style);
      }

      return style;
    }

    function removeStyleElement(style) {
      // istanbul ignore if
      if (style.parentNode === null) {
        return false;
      }

      style.parentNode.removeChild(style);
    }
    /* istanbul ignore next  */


    var replaceText = function replaceText() {
      var textStore = [];
      return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
      };
    }();

    function applyToSingletonTag(style, index, remove, obj) {
      var css = remove ? '' : obj.css; // For old IE

      /* istanbul ignore if  */

      if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
      } else {
        var cssNode = document.createTextNode(css);
        var childNodes = style.childNodes;

        if (childNodes[index]) {
          style.removeChild(childNodes[index]);
        }

        if (childNodes.length) {
          style.insertBefore(cssNode, childNodes[index]);
        } else {
          style.appendChild(cssNode);
        }
      }
    }

    function applyToTag(style, options, obj) {
      var css = obj.css;
      var media = obj.media;
      var sourceMap = obj.sourceMap;

      if (media) {
        style.setAttribute('media', media);
      }

      if (sourceMap && btoa) {
        css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
      } // For old IE

      /* istanbul ignore if  */


      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        while (style.firstChild) {
          style.removeChild(style.firstChild);
        }

        style.appendChild(document.createTextNode(css));
      }
    }

    var singleton = null;
    var singletonCounter = 0;

    function addStyle(obj, options) {
      var style;
      var update;
      var remove;

      if (options.singleton) {
        var styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
      } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);

        remove = function remove() {
          removeStyleElement(style);
        };
      }

      update(obj);
      return function updateStyle(newObj) {
        if (newObj) {
          if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
            return;
          }

          update(obj = newObj);
        } else {
          remove();
        }
      };
    }

    module.exports = function (list, options) {
      options = options || {};
      options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page

      if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
      }

      var styles = listToStyles(list, options);
      addStylesToDom(styles, options);
      return function update(newList) {
        var mayRemove = [];

        for (var i = 0; i < styles.length; i++) {
          var item = styles[i];
          var domStyle = stylesInDom[item.id];

          if (domStyle) {
            domStyle.refs--;
            mayRemove.push(domStyle);
          }
        }

        if (newList) {
          var newStyles = listToStyles(newList, options);
          addStylesToDom(newStyles, options);
        }

        for (var _i = 0; _i < mayRemove.length; _i++) {
          var _domStyle = mayRemove[_i];

          if (_domStyle.refs === 0) {
            for (var j = 0; j < _domStyle.parts.length; j++) {
              _domStyle.parts[j]();
            }

            delete stylesInDom[_domStyle.id];
          }
        }
      };
    };
    /***/

  },

  /***/
  "./src/styles.css":
  /*!************************!*\
    !*** ./src/styles.css ***!
    \************************/

  /*! no static exports found */

  /***/
  function srcStylesCss(module, exports, __webpack_require__) {
    var content = __webpack_require__(
    /*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */
    "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;

    var update = __webpack_require__(
    /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

    if (content.locals) {
      module.exports = content.locals;
    }
    /***/

  },

  /***/
  3:
  /*!******************************!*\
    !*** multi ./src/styles.css ***!
    \******************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/mohitmg25/Desktop/again/Ckeditor5-angular--master/src/styles.css */
    "./src/styles.css");
    /***/
  }
}, [[3, "runtime"]]]);
//# sourceMappingURL=styles-es5.js.map