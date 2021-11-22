export class BaseLogger {
    log(data) {
        // Eğer aşağıdaki loggerlara herhangi bir çıktı vermeseydik buradaki
        // değeri alacakları fakat bu çıktıyı ezdiler
        console.log("Default logger: " + data)
        //console.log(data)
    }
}
// İnherit ettik ElasticLogger'a sen bir BaseLogger'sın diyoruz
export class ElasticLogger extends BaseLogger {
    log(data) {
        console.log("Logged to Elastic" + data)
    }
}

export class MongoLogger extends BaseLogger {
    log(data) {
        console.log("Logged to Mongo" + data)
    }
}