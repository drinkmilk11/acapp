class AcGameMenu {
    constructor(root) {
        this.root = root;
        this.$menu = $(`
<div class="ac-game-menu">
    <div class="ac-game-menu-field">
        <div class="ac-game-menu-field-item ac-game-menu-field-item-single-mode">
            单人模式
        </div>
        <div class="ac-game-menu-field-item ac-game-menu-field-item-multi-mode">
            多人模式
        </div>
        <div class="ac-game-menu-field-item ac-game-menu-field-item-settings-mode">
            设置
        </div>
    </div>
</div>
`);        this.root.$ac_game.append(this.$menu);
        this.$single_mode = this.$menu.find('.ac-game-menu-field-item-single-mode');
        this.$multi_mode = this.$menu.find('.ac-game-menu-field-item-multi-mode');
        this.$settings_mode = this.$menu.find('.ac-game-menu-field-item-settings-mode');

        this.start();
    }
    start() {
        this.add_listening_events();
    }
    add_listening_events() {
        let outer = this;
        this.$single_mode.click(function(){
            outer.hide();   // 关闭主页面
            outer.root.playground.show();   // 打开游戏界面
        });
    }

    show() {    //显示menu界面
        this.$menu.show();
    }
    hide() {    //隐藏menu界面
        this.$menu.hide();
    }
}

class AcGamePlayground {
    constructor(root) {
        this.root = root;
        this.$playground = $(`<div>游戏界面</div>`);

        this.hide();
        this.root.$ac_game.append(this.$playground);

        this.start();
    }
    start() {

    }
    show() {    //打开 playground 界面
        this.$playground.show();
    }
    hide() {    //关闭 playground 界面
        this.$playground.hide();
    }

}

class AcGame {
    constructor(id) {
        this.id = id; 
        this.$ac_game = $('#' + id);
        this.menu = new AcGameMenu(this);
        this.playground = new AcGamePlayGround(this);

        this.start();
    }   
    start(){

    }
}
