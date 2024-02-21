import WhatssAppIcoGray from "../components/assets/whatsapp_gray_ico.svg";
import WhatsAppIco from "../components/assets/whatsapp_ico.svg";
import VkIcoGray from "../components/assets/vk_gray_ico.svg";
import VkIco from "../components/assets/vk_ico.svg";
import OkIcoGray from "../components/assets/ok_gray_ico.svg";
import OkIco from "../components/assets/ok_ico.svg";
import ViberGrayIco from "../components/assets/viber_gray_ico.svg";
import ViberIco from "../components/assets/viber_ico.svg";
import TgIcoGray from "../components/assets/tg_gray_ico.svg";
import TgIco from "../components/assets/tg_ico.svg";
import YoutubeIcoGray from "../components/assets/youtubeIcon_gray.svg";

export const socialProviders = [
  {
    type: "vk",
    href: "https://vk.com/zronline",
    endpoint: "https://vk.com/share.php",
    label: "Поделиться в ВК",
    icoGray: VkIcoGray,
    ico: VkIco,
    share: true,
    title: "За&nbsp;рулем в&nbsp;VK",
  },
  {
    type: "tg",
    endpoint: "https://t.me/share/url",
    href: "https://t.me/zr_ru",
    label: "Поделиться в Telegram",
    icoGray: TgIcoGray,
    ico: TgIco,
    share: true,
    title: "За&nbsp;рулем в&nbsp;Telegramm",
  },
  {
    type: "viber",
    endpoint: "viber://forward?text=",
    href: "https://invite.viber.com/?g2=AQB0H00UpI9O6E6l%2By%2BMvkML4J34GsK%2FkeuYFUEIdjSIFeRcqlu3L3gaXu1%2BkUUo&amp;lang=ru",
    label: "Поделиться в Viber",
    icoGray: ViberGrayIco,
    ico: ViberIco,
    share: true,
    title: "За&nbsp;рулем в&nbsp;Viber",
  },
  {
    type: "whatsapp",
    icoGray: WhatssAppIcoGray,
    ico: WhatsAppIco,
    share: true,
  },
  {
    type: "ok",
    href: "https://ok.ru/zrmag/",
    endpoint:
      "https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&amp;st.shareUrl=",
    label: "Поделиться в Одноклассниках",
    ico: OkIco,
    icoGray: OkIcoGray,
    share: true,
    title: "За&nbsp;рулем в&nbsp;Одноклассниках",
  },
  {
    type: "youtube",
    href: "https://www.youtube.com/user/tvzrru",
    icoGray: YoutubeIcoGray,
    title: "За&nbsp;рулем в&nbsp;Youtube",
  },
];
