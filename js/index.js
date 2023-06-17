
window.onload = function () {

    // URLを取得
    const url = new URL(window.location.href);

    // URSerchParamsオブジェクトを取得
    const params = url.searchParams;

    // パラメーターからvalueを取得
    const value = params.get("value");

    if (!value) {
        errorMakePage();
    } else if (value.length < 3 || value.length > 4) {
        errorMakePage();
    }else {
        // ページを作成します
        makePage(value);
    }
}

function makePage(value) {
    $("#header").empty();
    $(".img__inner1").empty();
    $(".img__inner2").empty();
    $(".img__inner3").empty();

    var valueParam = value;
 
    var japan = "";
    var picture1 = "";
    var picture2 = "";
    var picture3 = "";
    var picture4 = "";
    var picture5 = "";
    var picture6 = "";
    var txt1 = "";
    var txt2 = "";
    var txt3 = "";
    var txt4 = "";
    var txt5 = "";
    var txt6 = "";

    switch (valueParam) {
        case "北海道":
            // 北海道ブログ
            japan = HOKKAIDO;
            picture1 = HOKKAIDO_PICTURE1;
            picture2 = HOKKAIDO_PICTURE2;
            picture3 = HOKKAIDO_PICTURE3;
            picture4 = HOKKAIDO_PICTURE4;
            picture5 = HOKKAIDO_PICTURE5;
            picture6 = HOKKAIDO_PICTURE6;
            txt1 = HOKKAIDO_TXT1;
            txt2 = HOKKAIDO_TXT2;
            txt3 = HOKKAIDO_TXT3;
            txt4 = HOKKAIDO_TXT4;
            txt5 = HOKKAIDO_TXT5;
            txt6 = HOKKAIDO_TXT6;
            break;
        case "青森県":
            // 青森ブログ
            japan = AOMORI;
            picture1 = AOMORI_PICTURE1;
            picture2 = AOMORI_PICTURE2;
            txt1 = AOMORI_TXT1;
            txt2 = AOMORI_TXT2;
            break;
        case "秋田県":
            // 秋田ブログ
            japan = AKITA;
            picture1 = AKITA_PICTURE1;
            txt1 = AKITA_TXT1;
            break;
        case "岩手県":
            // 岩手ブログ
            japan = IWATE;
            picture1 = IWATE_PICTURE1;
            picture2 = IWATE_PICTURE2;
            picture3 = IWATE_PICTURE3;
            picture4 = IWATE_PICTURE4;
            txt1 = IWATE_TXT1;
            txt2 = IWATE_TXT2;
            txt3 = IWATE_TXT3;
            txt4 = IWATE_TXT4;
            break;
        case "山形県":
            // 山形ブログ
            japan = YAMAGATA;
            picture1 = YAMAGATA_PICTURE1;
            picture2 = YAMAGATA_PICTURE2;
            txt1 = YAMAGATA_TXT1;
            txt2 = YAMAGATA_TXT2;
            break;
        case "宮城県":
            // 宮城ブログ
            japan = MIYAGI;
            picture1 = MIYAGI_PICTURE1;
            txt1 = MIYAGI_TXT1;
            break;
        case "福島県":
            // 福島ブログ
            japan = FUKUSHIMA;
            picture1 = FUKUSHIMA_PICTURE1;
            txt1 = FUKUSHIMA_TXT1;
            break;
        case "群馬県":
            // 群馬ブログ
            japan = GUNMA;
            picture1 = GUNMA_PICTURE1;
            picture2 = GUNMA_PICTURE2;
            txt1 = GUNMA_TXT1;
            txt2 = GUNMA_TXT2;
            break;
        case "栃木県":
            // 栃木ブログ
            japan = TOCHIGI;
            picture1 = TOCHIGI_PICTURE1;
            picture2 = TOCHIGI_PICTURE2;
            picture3 = TOCHIGI_PICTURE3;
            picture4 = TOCHIGI_PICTURE4;
            txt1 = TOCHIGI_TXT1;
            txt2 = TOCHIGI_TXT2;
            txt3 = TOCHIGI_TXT3;
            txt4 = TOCHIGI_TXT4;
            break;
        case "茨城県":
            // 茨城ブログ
            japan = IBARAKI;
            picture1 = IBARAKI_PICTURE1;
            picture2 = IBARAKI_PICTURE2;
            picture3 = IBARAKI_PICTURE3;
            txt1 = IBARAKI_TXT1;
            txt2 = IBARAKI_TXT2;
            txt3 = IBARAKI_TXT3;
            break;
        case "埼玉県":
            // 埼玉ブログ
            japan = SAITAMA;
            picture1 = SAITAMA_PICTURE1;
            picture2 = SAITAMA_PICTURE2;
            txt1 = SAITAMA_TXT1;
            txt2 = SAITAMA_TXT2;
            break;
        case "千葉県":
            // 千葉ブログ
            japan = CHIBA;
            picture1 = CHIBA_PICTURE1;
            txt1 = CHIBA_TXT1;
            break;
        case "東京都":
            // 東京ブログ
            japan = TOKYO;
            picture1 = TOKYO_PICTURE1;
            picture2 = TOKYO_PICTURE2;
            picture3 = TOKYO_PICTURE3;
            picture4 = TOKYO_PICTURE4;
            txt1 = TOKYO_TXT1;
            txt2 = TOKYO_TXT2;
            txt3 = TOKYO_TXT3;
            txt4 = TOKYO_TXT4;
            break;
        case "神奈川県":
            // 神奈川ブログ
            japan = KANAGAWA;
            picture1 = KANAGAWA_PICTURE1;
            picture2 = KANAGAWA_PICTURE2;
            txt1 = KANAGAWA_TXT1;
            txt2 = KANAGAWA_TXT2;
            break;
        case "新潟県":
            // 新潟ブログ
            japan = NIIGATA;
            picture1 = NIIGATA_PICTURE1;
            txt1 = NIIGATA_TXT1;
            break;
        case "富山県":
            // 富山ブログ
            japan = TOYAMA;
            picture1 = TOYAMA_PICTURE1;
            picture2 = TOYAMA_PICTURE2;
            txt1 = TOYAMA_TXT1;
            txt2 = TOYAMA_TXT2;
            break;
        case "石川県":
            // 石川ブログ
            japan = ISHIKAWA;
            picture1 = ISHIKAWA_PICTURE1;
            picture2 = ISHIKAWA_PICTURE2;
            txt1 = ISHIKAWA_TXT1;
            txt2 = ISHIKAWA_TXT2;
            break;
        case "福井県":
            // 福井ブログ
            japan = FUKUI;
            picture1 = FUKUI_PICTURE1;
            txt1 = FUKUI_TXT1;
            break;
        case "長野県":
            // 長野ブログ
            japan = NAGANO;
            picture1 = NAGANO_PICTURE1;
            picture2 = NAGANO_PICTURE2;
            txt1 = NAGANO_TXT1;
            txt2 = NAGANO_TXT2;
            break;
        case "岐阜県":
            // 岐阜ブログ
            japan = GIHU;
            picture1 = GIHU_PICTURE1;
            picture2 = GIHU_PICTURE2;
            txt1 = GIHU_TXT1;
            txt2 = GIHU_TXT2;
            break;
        case "山梨県":
            // 山梨ブログ
            japan = YAMANASHI;
            picture1 = YAMANASHI_PICTURE1;
            txt1 = YAMANASHI_TXT1;
            break;
        case "愛知県":
            // 愛知ブログ
            japan = AICHI;
            picture1 = AICHI_PICTURE1;
            txt1 = AICHI_TXT1;
            break;
        case "静岡県":
            // 静岡ブログ
            japan = SHIZUOKA;
            picture1 = SHIZUOKA_PICTURE1;
            picture2 = SHIZUOKA_PICTURE2;
            picture3 = SHIZUOKA_PICTURE3;
            picture4 = SHIZUOKA_PICTURE4;
            txt1 = SHIZUOKA_TXT1;
            txt2 = SHIZUOKA_TXT2;
            txt3 = SHIZUOKA_TXT3;
            txt4 = SHIZUOKA_TXT4;
            break;
        case "京都府":
            // 京都ブログ
            japan = KYOTO;
            picture1 = KYOTO_PICTURE1;
            txt1 = KYOTO_TXT1;
            break;
        case "滋賀県":
            // 滋賀ブログ
            japan = SHIGA;
            picture1 = SHIGA_PICTURE1;
            txt1 = SHIGA_TXT1;
            notMakePage("COMING SOON");
            break;
        case "大阪府":
            // 大阪ブログ
            japan = OSAKA;
            picture1 = OSAKA_PICTURE1;
            txt1 = OSAKA_TXT1;
            break;
        case "奈良県":
            // 奈良ブログ
            japan = NARA;
            picture1 = NARA_PICTURE1;
            txt1 = NARA_TXT1;
            notMakePage("COMING SOON");
            break;
        case "三重県":
            // 三重ブログ
            japan = MIE;
            picture1 = MIE_PICTURE1;
            txt1 = MIE_TXT1;
            notMakePage("COMING SOON");
            break;
        case "和歌山県":
            // 和歌山ブログ
            japan = WAKAYAMA;
            picture1 = WAKAYAMA_PICTURE1;
            txt1 = WAKAYAMA_TXT1;
            notMakePage("COMING SOON");
            break;
        case "兵庫県":
            // 兵庫ブログ
            japan = HYOGO;
            picture1 = HYOGO_PICTURE1;
            picture2 = HYOGO_PICTURE2;
            txt1 = HYOGO_TXT1;
            txt2 = HYOGO_TXT2;
            break;
        case "鳥取県":
            // 鳥取ブログ
            japan = TOTTORI;
            picture1 = TOTTORI_PICTURE1;
            picture2 = TOTTORI_PICTURE2;
            txt1 = TOTTORI_TXT1;
            txt2 = TOTTORI_TXT2;
            break;
        case "岡山県":
            // 岡山ブログ
            japan = OKAYAMA;
            picture1 = OKAYAMA_PICTURE1;
            picture2 = OKAYAMA_PICTURE2;
            picture3 = OKAYAMA_PICTURE3;
            txt1 = OKAYAMA_TXT1;
            txt2 = OKAYAMA_TXT2;
            txt3 = OKAYAMA_TXT3;
            break;
        case "島根県":
            // 島根ブログ
            japan = SHIMANE;
            picture1 = SHIMANE_PICTURE1;
            picture2 = SHIMANE_PICTURE2;
            txt1 = SHIMANE_TXT1;
            txt2 = SHIMANE_TXT2;
            break;
        case "広島県":
            // 広島ブログ
            japan = HIROSHIMA;
            picture1 = HIROSHIMA_PICTURE1;
            picture2 = HIROSHIMA_PICTURE2;
            picture3 = HIROSHIMA_PICTURE3;
            picture4 = HIROSHIMA_PICTURE4;
            txt1 = HIROSHIMA_TXT1;
            txt2 = HIROSHIMA_TXT2;
            txt3 = HIROSHIMA_TXT3;
            txt4 = HIROSHIMA_TXT4;
            break;
        case "山口県":
            // 山口ブログ
            japan = YAMAGUCHI;
            picture1 = YAMAGUCHI_PICTURE1;
            txt1 = YAMAGUCHI_TXT1;
            notMakePage("COMING SOON");
            break;
        case "香川県":
            // 香川ブログ
            japan = KAGAWA;
            picture1 = KAGAWA_PICTURE1;
            picture2 = KAGAWA_PICTURE2;
            picture3 = KAGAWA_PICTURE3;
            txt1 = KAGAWA_TXT1;
            txt2 = KAGAWA_TXT2;
            txt3 = KAGAWA_TXT3;
            break;
        case "愛媛県":
            // 愛媛ブログ
            japan = EHIME;
            picture1 = EHIME_PICTURE1;
            picture2 = EHIME_PICTURE2;
            txt1 = EHIME_TXT1;
            txt2 = EHIME_TXT2;
            break;
        case "徳島県":
            // 徳島ブログ
            japan = TOKUSHIMA;
            picture1 = TOKUSHIMA_PICTURE1;
            picture2 = TOKUSHIMA_PICTURE2;
            txt1 = TOKUSHIMA_TXT1;
            txt2 = TOKUSHIMA_TXT2;
            break;
        case "高知県":
            // 高知ブログ
            japan = KOCHI;
            picture1 = KOCHI_PICTURE1;
            picture2 = KOCHI_PICTURE2;
            picture3 = KOCHI_PICTURE3;
            picture4 = KOCHI_PICTURE4;
            txt1 = KOCHI_TXT1;
            txt2 = KOCHI_TXT2;
            txt3 = KOCHI_TXT3;
            txt4 = KOCHI_TXT4;
            break;
        case "福岡県":
            // 福岡ブログ
            japan = HUKUOKA;
            picture1 = HUKUOKA_PICTURE1;
            picture2 = HUKUOKA_PICTURE2;
            txt1 = HUKUOKA_TXT1;
            txt2 = HUKUOKA_TXT2;
            break;
        case "佐賀県":
            // 佐賀ブログ
            japan = SAGA;
            picture1 = SAGA_PICTURE1;
            txt1 = SAGA_TXT1;
            notMakePage("COMING SOON");
            break;
        case "長崎県":
            // 長崎ブログ
            japan = NAGASAKI;
            picture1 = NAGASAKI_PICTURE1;
            txt1 = NAGASAKI_TXT1;
            notMakePage("COMING SOON");
            break;
        case "大分県":
            // 大分ブログ
            japan = OITA;
            picture1 = OITA_PICTURE1;
            picture2 = OITA_PICTURE2;
            picture3 = OITA_PICTURE3;
            picture4 = OITA_PICTURE4;
            txt1 = OITA_TXT1;
            txt2 = OITA_TXT2;
            txt3 = OITA_TXT3;
            txt4 = OITA_TXT4;
            break;
        case "熊本県":
            // 熊本ブログ
            japan = KUMAMOTO;
            picture1 = KUMAMOTO_PICTURE1;
            picture2 = KUMAMOTO_PICTURE2;
            picture3 = KUMAMOTO_PICTURE3;
            txt1 = KUMAMOTO_TXT1;
            txt2 = KUMAMOTO_TXT2;
            txt3 = KUMAMOTO_TXT3;
            break;
        case "宮崎県":
            // 宮崎ブログ
            japan = MIYAZAKI;
            picture1 = MIYAZAKI_PICTURE1;
            picture2 = MIYAZAKI_PICTURE2;
            picture3 = MIYAZAKI_PICTURE3;
            picture4 = MIYAZAKI_PICTURE4;
            txt1 = MIYAZAKI_TXT1;
            txt2 = MIYAZAKI_TXT2;
            txt3 = MIYAZAKI_TXT3;
            txt4 = MIYAZAKI_TXT4;
            break;
        case "鹿児島県":
            // 鹿児島ブログ
            japan = KAGOSIMA;
            picture1 = KAGOSIMA_PICTURE1;
            txt1 = KAGOSIMA_TXT1;
            notMakePage("COMING SOON");
            break;
        case "沖縄県":
            // 沖縄ブログ
            japan = OKINAWA;
            picture1 = OKINAWA_PICTURE1;
            picture2 = OKINAWA_PICTURE2;
            txt1 = OKINAWA_TXT1;
            txt2 = OKINAWA_TXT2;
            break;
        default:
            errorMakePage();
            return;
    }

    $("#header").append(
        '<div class="header" >' + japan + '</div>'
    );

    let pictures = [
        picture1,
        picture2,
        picture3,
        picture4,
        picture5,
        picture6
    ];

    var files = [
        txt1,
        txt2,
        txt3,
        txt4,
        txt5,
        txt6
    ];

    var id = [
        ".img__inner1",
        ".img__inner1",
        ".img__inner2",
        ".img__inner2",
        ".img__inner3",
        ".img__inner3"
    ];



    for (let i = 0; i < files.length ; i++) {
        if (!files[i] == "") {
            $(id[i]).append(
                '<div class="img__card">'
                + '<img src= "' + pictures[i] + '" alt="" class="img-item">'
                + '<p class="img-txt">' + files[i] + '</p>'
                + '</div>'
            );
        }
    }
}

function errorMakePage() {
    $("#errorMessage").append(
        '<div id="errorMessage">予期せぬエラーが発生しました。' + '<br>' + 'HOMEに戻ってやり直してください</div>'
    );
}

function notMakePage(e) {
    $("#errorMessage").append(
        '<div id="errorMessage">' + e + '</div>'
    );
}