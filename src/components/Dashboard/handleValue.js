export function handleValue(type, entry) {
  switch (type) {
    case "age":
      switch (entry) {
        case 1:
          return "18-25";
        case 2:
          return "25-35";
        case 3:
          return "35-50";
        case 4:
          return "60+";
        default:
          return "Invalid entry";
      }
    case "nationality":
      switch (entry) {
        case "FOREIGN":
          return "أجنبي";
        case "SAUDI":
          return "سعودي";
        default:
          return "Invalid entry";
      }
    case "level":
      switch (entry) {
        case 1:
          return "مبتدئ";
        case 2:
          return "متوسط";
        case 3:
          return "متقــدم";
        case 4:
          return "خبيـــــــر";
        default:
          return "Invalid entry";
      }
    case "preferences":
      switch (entry) {
        case 1:
          return "أصرف وأدلل نفسي";
        case 2:
          return "أسدد إلتزاماتي";
        case 3:
          return "أستثمر جزء من المبلغ";
        default:
          return "Invalid entry";
      }
    case "hesitations":
      switch (entry) {
        case 1:
          return "عدم التجربـــة وقلة المعرفة";
        case 2:
          return "عدم القدرة على متابعة الاستثمار";
        case 3:
          return "الخوف من المخاطــرة";
        default:
          return "Invalid entry";
      }
    case "bestMarket":
      switch (entry) {
        case 1:
          return "الذهب والنفط";
        case 2:
          return "سوق الأسهم";
        case 3:
          return "صناديق الاستثمار";
        case 4:
          return "سوق العملات";
        default:
          return "Invalid entry";
      }
    case "futureOpinion":
      switch (entry) {
        case 1:
          return "استثمر وادخر";
        case 2:
          return "وظيفة إضافية";
        case 3:
          return "أطور من نفسي بالعلم";
        default:
          return "Invalid entry";
      }
    case "mainGoal":
      switch (entry) {
        case 1:
          return "تحقيق أرباح سريعة";
        case 2:
          return "توفير للمستقبل";
        case 3:
          return "دخل إضافي";
        case 4:
          return "تعلم وتجربة";
        default:
          return "Invalid entry";
      }
    case "experience":
      switch (entry) {
        case 1:
          return "اي, في الاسواق العالمية";
        case 2:
          return "اي, في السوق المحلي";
        case 3:
          return "لا، ماعندي خبرة أبد";
        default:
          return "Invalid entry";
      }
    case "prefrences":
      switch (entry) {
        case 1:
          return "أصرف وأدلل نفسي";
        case 2:
          return "أسدد إلتزاماتي";
        case 3:
          return "أستثمر جزء من المبلغ";
        default:
          return "Invalid entry";
      }
    case "target":
      switch (entry) {
        case 1:
          return "دخل إضافي";
        case 2:
          return "اطوّر رأس مالي";
        case 3:
          return "التعلم والتداول";
        default:
          return "Invalid entry";
      }
    default:
      return "Invalid type";
  }
}
