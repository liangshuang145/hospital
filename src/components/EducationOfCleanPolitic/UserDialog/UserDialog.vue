<template>
  <el-dialog :value="value" name="UserDialog" :visible="isShow" :before-close="handleClose" :title="title" width="750px" center>
    <el-form ref="form" :model="form" :rules="rule" label-width="110px" label-position="right">
      <tr>
        <td><el-form-item label="发起支部" prop="text01">
          <el-input v-model="form.text01 " size="medium" :maxlength="30" placeholder="请输入支部"/>
        </el-form-item></td>
        <td><el-form-item label="标题" prop="text02">
          <el-input v-model="form.text02" size="medium" :maxlength="30" placeholder="请输入标题"/>
        </el-form-item></td>
      </tr>
      <tr>
        <td><el-form-item label="状态" prop="text03">
          <el-input v-model="form.text03 " size="medium" :maxlength="30" placeholder="请输入状态"/>
        </el-form-item></td>
        <td><el-form-item label="发布时间" prop="text04">
          <el-date-picker
            v-model="form.text04" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd">
          </el-date-picker>
        </el-form-item></td>
      </tr>
      <tr>
        <td><el-form-item label="作者" prop="text05">
          <el-input v-model="form.text05" size="medium" :maxlength="30" placeholder="请输入作者"/>
        </el-form-item></td>
        <td><el-form-item label="专题类型" prop="text06">
          <el-input v-model="form.text06" size="medium" :maxlength="30" placeholder="请输入专题"/>
        </el-form-item></td>
      </tr>
      <tr>
        <td><el-form-item label="评论" prop="text07">
          <el-input v-model="form.text07" size="medium" :maxlength="30" placeholder="请输入评论"/>
        </el-form-item></td>
        <td><el-form-item label="签到数" prop="text08">
          <el-input v-model="form.text08" size="medium" :maxlength="30" placeholder="请输入签到数"/>
        </el-form-item></td>
      </tr>


    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button v-if="type == 0" size="medium" width="long" @click="cancelClick">关 闭</el-button>
      <template v-else>
        <el-button size="medium" width="long" @click="cancelClick">取 消</el-button>
        <el-button size="medium" width="long" type="primary" @click="sureClick">确 定</el-button>
      </template>
    </span>
  </el-dialog>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Validator from '@/lib/validator'
import UserService from '@/services/UserService'
import ElFormItem from "../../../../node_modules/element-ui/packages/form/src/form-item";

export default {
  components: {ElFormItem},
  name: 'UserDialog',
  props: {
    userData: { // 用户数据
      type: Object,
      default() {
        return {}
      }
    },
    type: { // 类型: 0-查看(默认),1-新增,2-修改
      type: Number,
      default: 0
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    type(val) {
      let title = '';
      if(!val){
          val = 0
      }
      switch (val) {
        case 1:
          title = '新增用户';
          break;
        case 2:
          title = '修改用户';
          break;
        default:
          title = '查看用户';
          break
      }
      this.title = title
    },
    value(val) {
      this.isShow = val
    },
    isShow(val) {
      this.$emit('input', val)
    },
    userData(data) {
      this.form.id = data.id;
      this.form.account = data.account;
      this.form.nickname = data.nickname;
      this.form.gender = data.gender;
      this.form.type = data.type;
      this.form.subject = data.subject;
      this.form.depart = data.depart;
      this.form.group = data.group;
      this.form.description = data.description;
      this.form.nation = data.nation;
      this.form.nativePlace = data.nativePlace;
      this.form.dateOfBirth = data.dateOfBirth;
      this.form.education = data.education;
      this.form.mobilePhone = data.mobilePhone;
      this.form.telephone = data.telephone;
      this.form.weChat = data.weChat;
      this.form.email = data.email;
      this.form.address = data.address;
      this.from.idCard = data.idCard;
      this.form.number = data.number;
      this.form.administrative = data.administrative;
      this.form.politicsStatus = data.politicsStatus;
      this.form.peopleType = data.peopleType;
      this.form.partyBranch = data.partyBranch;
      this.form.partyPosts = data.partyPosts
      this.form.equipment = data.equipment;
      this.form.text01 = data.text01;
      this.form.text02 = data.text02;
      this.form.text03 = data.text03;
      this.form.text04 = data.text04;
      this.form.text05 = data.text05;
      this.form.text06 = data.text06;
      this.form.text07 = data.text07;
      this.form.text08 = data.text08;
    }
  },
  data() {
    return {
      isShow: false,
      title:'',
      form: {
        imageUrl:'',
        id: '',
        account: '',
        password: '',
        nickname: '',
        gender: -1,
        type: 2,
        subject: '',
        depart: '',
        group: '',
        description: '',
        nation:'',
        nativePlace:'',
        dateOfBirth:'',
        education:'',
        mobilePhone:'',
        telephone:'',
        weChat:'',
        email:'',
        address:'',
        administrative:'',
        politicsStatus:'',
        idCard:'',
        peopleType:'',
        partyBranch:'',
        partyPosts:'',
        equipment:'',
        text01:'',
        text02:'',
        text03:'',
        text04:'',
        text05:'',
        text06:'',
        text07:'',
        text08:'',
      },
      rule: {
        name: [{
          validator: Validator.checkName,
          trigger: 'blur'
        }]
      },
      options:[
        {label:'高中',value:1},
        {label:'专科',value:2},
        {label:'本科',value:3},
        {label:'研究生',value:4},
        {label:'硕士',value:5},
        {label:'硕士研究生',value:6},
        {label:'博士',value:7},
      ],
      politicsStatus:[
        {label:'群众',value:1},
        {label:'团员',value:2},
        {label:'党员',value:3},
      ],
      peopleType:[
        {label:'正式党员',value:1},
        {label:'预备党员',value:2},
        {label:'入党积极分子',value:3},
        {label:'入党申请人',value:4},
        {label:'位置',value:5},
      ]
    }
  },
  computed: {
//    ...mapState([
//      'subjectList',
//      'departList',
//      'groupList'
//    ]),
  },
//  async mounted() {
//    await this.getSubjectList()
//    await this.getDepartList()
//    await this.getGroupList()
//  },
  methods: {
    ...mapActions([
      'getSubjectList',
      'getDepartList',
      'getGroupList',
      'getUserList'
    ]),
    selectSubject(val) {
      this.form.subject = val
    },
    selectDepart(val) {
      this.form.depart = val
    },
    selectGroup(val) {
      this.form.group = val
    },
    // 确定按钮
    sureClick() {
      switch (this.type) {
        case 1: // 新增
          UserService.addUser(this.form).then((res) => {
            this.$message.success('已添加');

            this.getUserList();
            this.isShow = false
          });
          break;
        case 2: // 修改
          // 注意不要修改密码
          UserService.updateUser(this.form).then((res) => {
            this.$message.success('已修改');

            this.getUserList();
            this.isShow = false
          });
          break;
        default:
          break
      }
    },

    // 取消按钮
    cancelClick() {
      this.isShow = false
    },
    // 关闭按钮
    handleClose() {
      this.isShow = false
    },
    // 上传拖
    handleAvatarSuccess(res, file) {
      this.form.imageUrl = URL.createObjectURL(file.raw);
    },
  }
}
</script>

<style scoped>
  .avatar-uploader .el-upload {
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
