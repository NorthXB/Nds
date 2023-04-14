<!-- JavaScript -->
<script>
function postLock(){if(document.getElementById("lockerPassword").value==="locked"){document.getElementById("lockerContent").classList.remove("contentHide");document.getElementById("postLocker").classList.add("contentHide")}else{alert("Wrong Password!");lockerPassword.setSelectionRange(0,lockerPassword.value.length)}return false}
</script>
<!-- End JavaScript -->