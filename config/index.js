export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx3fe6b0547604183e",
    // 公众号appSecret
    appSecret: "0fd1390f6f4f3bb99c63fc65e4c00481",
    // 模板消息id
    templateId: "SV7rWZupB8yLC3TYnSGkdDO-UWAU65opzkfs45ehJUQ",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["oZxoq60T3gbU42lo0XDhPIH-4VXo", "oZxoq64-z93XzrgwCGZb1aiL3bFQ"],
     
    // 信息配置
    // 所在省份
    province: "上海",
    // 所在城市
    city: "上海",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "维修姐", "year": "1999", "date": "11-23", "type": 'new'},
      {"name": "叮当", "year": "1999", "date": "11-19", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2021-12-01",
    // 结婚纪念日
    //marryDate: "2020-01-04"
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
