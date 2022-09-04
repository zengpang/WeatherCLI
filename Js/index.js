const getWeather=require(`weatherclt`);
switch(true)
{
    case(process.argv[2] === '--help'):
    {
        console.log(`
        Usage:
          weather <cityName>
      
        Example:
          weather 北京
        `)
    };break;
    default:{
        let city=process.argv[2];
        getWeather(city)
        .then(data=>{
            console.log(`当前城市:${city}`);
            console.log(`当前城市白天天气:${data.daily[0].textDay}`);
            console.log(`当前城市晚上天气:${data.daily[0].textNight}`);
            console.log(`当前城市月相为:${data.daily[0].moonPhase}`);
            console.log(`当前城市最高温度为:${data.daily[0].tempMin}`);
            console.log(`当前城市最低温度为:${data.daily[0].tempMax}`);
            console.log(`当前城市能见度为:${data.daily[0].vis}`);
        }).catch(e=>{
            console.log(e);
        })
    };break;
}
