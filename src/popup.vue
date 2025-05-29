<script setup lang="ts">
import browser from "webextension-polyfill";

browser.runtime.openOptionsPage();
window.close();
</script>