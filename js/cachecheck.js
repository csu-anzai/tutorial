// �L���b�V������Ă���f�[�^�̍X�V�m�F

window.addEventListener('load', function(e) {

	window.applicationCache.addEventListener('updateready', function(e) {
	if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
		window.applicationCache.swapCache();
		window.location.reload();
	}
  }, false);

}, false);