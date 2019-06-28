<template>
  <el-dialog
    :value="value"
    name="ImportDialog"
    :visible="isShow"
    :before-close="handleClose"
    :title="title"
    width="800px"
    center
  >
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="分数">
        <el-input v-model="form.total"></el-input>
      </el-form-item>
      <el-form-item label="年份(必填)">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.year" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="机构ID(必填)">
        <el-select v-model="form.subjectId" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="附件ID集合">
        <el-input v-model="form.groupId"></el-input>
      </el-form-item>
      <el-form-item label="部门ID(选填)">
        <el-select filterable placeholder="请选择">
          <el-option>研发部</el-option>
          <el-option>人事部</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="组织ID(选填)">
        <el-select filterable placeholder="请选择">
          <el-option>一组</el-option>
          <el-option>二组</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="用户ID(选填)">
        <el-select filterable placeholder="请选择">
          <el-option>7306</el-option>
          <el-option>7088</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="描述 ">
        <el-input type="textarea" v-model="form.remark"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
import MedicalService from "../../../services/MedicalService";
export default {
  name: "addDocument",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    type: {
      // 类型: 0-查看(默认),1-新增,2-修改
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      form: {
        isShow: false,
        name: "",
        total: undefined,
        year: "",
        subjectId: "",
        fileIds: [],
        departId: "",
        groupId: "",
        userId: "",
        remark: ""
      }
    };
  },
  watch: {
    value(val) {
      this.isShow = val;
    },
    isShow(value) {
      this.$emit("input", value);
    },
    type(val) {
      let title = "";
      if (!val) {
        val = 0;
      }
      switch (val) {
        case 0:
          title = "查看医德档案";
          break;
        case 1:
          title = "新增医德档案";
          break;
        case 2:
          title = "修改医德档案";
          break;
        default:
          title = "查看医德档案";
          break;
      }
      this.title = title;
    }
  },
  methods: {
    // 关闭按钮
    handleClose() {
      this.isShow = true;
    },
    //取消按钮
    onCancel() {
      this.isShow = false;
    },
    onSubmit() {
      switch (this.type) {
        case 0: //查看

        case 1: // 新增
          MedicalService.addDocument(this.form).then(res => {
            if (res.code === 200) {
              this.isShow = false;
              this.$message.success(res.message);
            } else {
              this.$message.error(res.message);
            }
          });
          break;
        case 2: // 修改
          break;
        default:
          break;
      }
      console.log("submit!");
    }
  }
};
</script>

<style>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>

