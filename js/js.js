$('.slider').slick({
		autoplay: true,//�����I�ɓ����o�����B�����l��false�B
		infinite: true,//�X���C�h�����[�v�����邩�ǂ����B�����l��true�B
		slidesToShow: 4,//�X���C�h����ʂ�3��������
		slidesToScroll: 3,//1��̃X�N���[����3���̎ʐ^���ړ����Č�����
		prevArrow: '<div class="slick-prev"></div>',//��󕔕�Preview��HTML��ύX
		nextArrow: '<div class="slick-next"></div>',//��󕔕�Next��HTML��ύX
		dots: true,//�����h�b�g�i�r�Q�[�V�����̕\��
		responsive: [
			{
			breakpoint: 769,//���j�^�[�̉�����769px�ȉ��̌�����
			settings: {
				slidesToShow: 2,//�X���C�h����ʂ�2��������
				slidesToScroll: 2,//1��̃X�N���[����2���̎ʐ^���ړ����Č�����
			}
		},
		{
			breakpoint: 426,//���j�^�[�̉�����426px�ȉ��̌�����
			settings: {
				slidesToShow: 1,//�X���C�h����ʂ�1��������
				slidesToScroll: 1,//1��̃X�N���[����1���̎ʐ^���ړ����Č�����
			}
		}
	]
	});