const diagnosisData = [
  {
    key: "1",
    name: ["不孕症", "原发性不孕症", "继发性不孕症", "输卵管阻塞性不孕"],
    handleFun(item) {
      if (
        item["夫妇同居，性生活正常"] &&
        item["未避孕未孕1年以上"] &&
        item["未妊娠过"]
      ) {
        return this.name[1];
      }
      if (
        item["夫妇同居，性生活正常"] &&
        item["未避孕未孕1年以上"] &&
        item["既往有过妊娠"]
      ) {
        return this.name[2];
      }
      if (item["夫妇同居，性生活正常"] && item["未避孕未孕1年以上"]) {
        if (
          item["子宫输卵管造影报告"] &&
          (item["输卵管"] === "不通畅" ||
            item["输卵管"] === "阻塞" ||
            item["输卵管"] === "积水")
        ) {
          return this.name[3];
        }
        if (
          item["腹腔镜"] &&
          item["输卵管通液"] &&
          item["输卵管"] === "不通" &&
          item["盆腔"] === "粘连"
        ) {
          return this.name[3];
        }
        if (item["开腹输卵管结扎术"] && item["输卵管妊娠切除术"]) {
          return this.name[3];
        }
      }
      return false;
    }
  },
  {
    key: "2",
    name: ["多囊卵巢综合征"],
    handleFun(item) {
      let count = 0;
      if (item["卵巢直径2～9mm的卵泡"] >= 12 || item["卵巢体积"] >= 10) {
        count++;
      }
      if (item["高雄激素的临床表现（痤疮、多毛等）"] || item["高雄激素血症"]) {
        count++;
      }
      if (item["稀发排卵或不排卵（监测卵泡有不发育的情况，包括促排卵）"]) {
        count++;
      }

      return count > 1 ? this.name[0] : false;
    }
  },
  {
    key: "3",
    name: ["卵巢功能早衰"],
    handleFun(item) {
      let count = 0;
      if (
        item["40岁以下的妇女"] < 40 &&
        item["排除妊娠后"] &&
        item["发生超过6个月的闭经"] > 6
      ) {
        count++;
      }
      if (item["间隔1个月"] === 1) {
        let sum = 0;
        item["至少两次血"].forEach(data => {
          data["基础FSH"] > 40 && sum++; //单位  IU/L
        });
        sum > 1 && count++;
      }
      if (item["间隔1个月"] === 1) {
        let sum = 0;
        item["至少两次血"].forEach(data => {
          data["雌激素水平E2"] < 50.41 && sum++; //单位  pg/ml     相当于185pmol/L
        });
        sum > 1 && count++;
      }

      return count === 3 ? this.name[0] : false;
    }
  },
  {
    key: "4",
    name: ["原发性卵巢功能不全"],
    handleFun(item) {
      let count = 0;
      if (item["发病年龄"] < 40) {
        count++;
      }
      if (item["间隔1个月"] === 1) {
        let sum = 0;
        item["至少两次血"].forEach(data => {
          data["基础FSH"] > 35 && sum++; //单位  IU/L
        });
        sum > 1 && count++;
      }

      return count === 2 ? this.name[0] : false;
    }
  },
  {
    key: "5",
    name: ["输卵管妊娠", "可能是输卵管妊娠"],
    handleFun(item) {
      if (item["卵黄囊"] || item["胚芽的孕囊"]) {
        return this.name[0];
      }

      if (item["腹腔"] || item["开腹手术"]) {
        if (
          item["膨大紫色输卵管包块"] &&
          (item["绒毛"] || item["病理见绒毛细胞"])
        ) {
          return this.name[0];
        }
      }
      if (item["血hCG"] && item["妊娠状态"] && item["超声结果"]) {
        return this.name[1];
      }
      if (
        item["停经史"] ||
        (item["无明显停经可伴有不规则的阴道流血，早期会伴有下腹部坠胀不适"] &&
          item["破裂时，可表现为明显的肛门坠重感、一侧下腹撕裂样剧痛"])
      ) {
        return this.name[1];
      }
      return false;
    }
  },
  {
    key: "6",
    name: ["子宫内膜异位症", "可能是子宫内膜异位症"],
    handleFun(item) {
      if (
        item["超声可见囊壁厚而粗糙"] &&
        item["囊内有细小絮状光点的盆腔异位囊肿"] &&
        item["肌层回声不均质"] &&
        item["后壁增厚粗糙"] &&
        (item["盆腔CT"] || item["MRI"])
      ) {
        return this.name[0];
      }
      if (item["手术记录"] && item["腹腔镜手术"]) {
        return this.name[0];
      }
      if (
        item["盆腔疼痛"] ||
        item["非经期腹痛"] ||
        item["性交痛"] ||
        item["排便痛"]
      ) {
        return this.name[1];
      }
      if (
        item["盆腔包块"] &&
        item["较多的阳性体征"] &&
        (item["子宫后壁不方触痛性结节"] ||
          item["双侧宫骶韧带增粗"] ||
          item["触痛（+）"] ||
          item["附件区囊性包块伴触痛"])
      ) {
        return this.name[1];
      }
      if (item["血清CA125多有增高"] && item["动态检测CA125"]) {
        return this.name[1];
      }
      return false;
    }
  },
  {
    key: "7",
    name: ["男性因素"],
    handleFun(item) {
      if (
        item["精液量"] <= 1.5 || //单位ml
        item["精液液化时间"] > 60 || //单位分钟
        (item["精子浓度"] < 1500 && item["总精子数"] < 3900) || //单位 万/ml
        item["前向运动精子百分率"] < 32 || //单位%
        item["正常形态百分率"] < 4 //单位%
      ) {
        return this.name[0];
      }
      if (item["手术记录"] && item["腹腔镜手术"]) {
        return this.name[0];
      }
      if (
        item["盆腔疼痛"] ||
        item["非经期腹痛"] ||
        item["性交痛"] ||
        item["排便痛"]
      ) {
        return this.name[1];
      }
      if (
        item["盆腔包块"] &&
        item["较多的阳性体征"] &&
        (item["子宫后壁不方触痛性结节"] ||
          item["双侧宫骶韧带增粗"] ||
          item["触痛（+）"] ||
          item["附件区囊性包块伴触痛"])
      ) {
        return this.name[1];
      }
      if (item["血清CA125多有增高"] && item["动态检测CA125"]) {
        return this.name[1];
      }
      return false;
    }
  },
  {
    key: "8",
    name: ["复发性流产"],
    handleFun(item) {
      let sum = 0;
      item["在孕 20 周"].forEach(data => {
        data["自然流产"] && sum++;
      });
      return sum > 1 ? this.name[0] : false;
    }
  },
  {
    key: "9",
    name: ["原发性高血压"],
    handleFun(item) {
      if (item["收缩压"] >= 140 || item["舒张压"] >= 90) {
        //单位mmHg
        return this.name[0];
      }
      if (item["3次血压"][2] > item["3次血压"][1] > item["3次血压"][0]) {
        return this.name[0];
      }
      return false;
    }
  },
  {
    key: "10",
    name: ["Ⅱ型糖尿病", "可能存在糖尿病"],
    handleFun(item) {
      if (item["空腹血糖"] >= 7.0) {
        //单位 mmol/L
        if (item["复查血糖"] || item["具有糖尿病的典型症状"]) {
          return this.name[0];
        }
      }
      if (item["口服葡萄糖耐量试验或者餐后2小时血糖"] >= 11.1) {
        //单位 mmol/L
        if (item["复查血糖"] || item["具有糖尿病的典型症状"]) {
          return this.name[0];
        }
      }
      if (item["糖化血红蛋白"] >= 6.5) {
        //单位%
        return this.name[1];
      }

      return false;
    }
  },
  {
    key: "11",
    name: ["阑尾炎", "急性阑尾炎", "慢性阑尾炎"],
    handleFun(item) {
      if (item["转移性右下腹痛"] && item["白细胞"] >= "10×10^9") {
        //单位 /L
        return this.name[1];
      }
      if (item["右下腹麦氏点压痛"]) {
        if (
          item["表现"] === "恶心" ||
          item["表现"] === "呕吐" ||
          item["表现"] === "发热"
        ) {
          return this.name[2];
        }
        return this.name[2];
      }

      return false;
    }
  }
];
diagnosisData.forEach(item => {
  const result = item.handleFun({ param1: "", param2: "", param3: "" });
  console.log("result", result);
});
