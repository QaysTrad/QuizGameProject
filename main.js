var btnRD = $(".ready")

btnRD.on("click",function () {
	localStorage.setItem("lastname", $(".nickName").val())
})


