(function () {
    var createElement = document.createElement;
    document.createElement = function (tag) {
        switch (tag) {
            case 'script':
                console.log('���ö�̬���ӽű�����ֹ��������');
                break;
            default:
                return createElement.apply(this, arguments);
        }
    }
})();