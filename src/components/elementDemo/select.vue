<template>
  <div>
    <h1>select</h1>
    <el-row>
      <el-select v-model="value" placeholder="请选择" multiple clearable>
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"
                   :disabled="item.disabled">
        </el-option>
      </el-select>
    </el-row>
    <el-row>
      <el-select v-model="value1" placeholder="请选择" multiple clearable collapse-tags>
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"
                   :disabled="item.disabled">
        </el-option>
      </el-select>
    </el-row>
    <el-row>
      <el-select v-model="value2" placeholder="请选择">
        <el-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value">
          <span style="float: left;">{{item.label}}</span>
          <span style="float: right;">{{item.value}}</span>
        </el-option>
      </el-select>
    </el-row>
    <el-row>
      <el-select v-model="value3" placeholder="请选择城市" filterable>
        <el-option-group v-for="group in groupSelect" :key="group.label" :label="group.label">
          <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-option-group>
      </el-select>
    </el-row>
  </div>
</template>


<script>
  let options = [{
    value: '选项1',
    label: '黄金糕'
  }, {
    value: '选项2',
    label: '双皮奶'
  }, {
    value: '选项3',
    label: '蚵仔煎'
  }, {
    value: '选项4',
    label: '龙须面'
  }, {
    value: '选项5',
    label: '北京烤鸭'
  }]

  let cities = [{
    value: 'Beijing',
    label: '北京'
  }, {
    value: 'Shanghai',
    label: '上海'
  }, {
    value: 'Nanjing',
    label: '南京'
  }, {
    value: 'Chengdu',
    label: '成都'
  }, {
    value: 'Shenzhen',
    label: '深圳'
  }, {
    value: 'Guangzhou',
    label: '广州'
  }]
  let groupSelect = [{
    label: '热门市',
    options: [{
      value: 'Shanghai',
      label: '上海'
    }, {
      value: 'Beijing',
      label: '北京'
    }, {
      value: 'DongJing',
      label: '东京'
    }]
  }, {
    label: '城市名',
    options: [{
      value: 'Chengdu',
      label: '成都'
    }, {
      value: 'Shenzhen',
      label: '深圳'
    }, {
      value: 'Guangzhou',
      label: '广州'
    }, {
      value: 'Dalian',
      label: '大连'
    }]
  }]

  export default {
    data () {
      return {
        options: options,
        value: '选项5',
        value1: '选项5',
        value2: '',
        value3: '',
        groupSelect: groupSelect,
        cities: cities,
        loading: false,
        options1: [],
        value4: [],
        list: [],
        states: ['Alabama', 'Alaska', 'Arizona',
          'Arkansas', 'California', 'Colorado',
          'Connecticut', 'Delaware', 'Florida',
          'Georgia', 'Hawaii', 'Idaho', 'Illinois',
          'Indiana', 'Iowa', 'Kansas', 'Kentucky',
          'Louisiana', 'Maine', 'Maryland',
          'Massachusetts', 'Michigan', 'Minnesota',
          'Mississippi', 'Missouri', 'Montana',
          'Nebraska', 'Nevada', 'New Hampshire',
          'New Jersey', 'New Mexico', 'New York',
          'North Carolina', 'North Dakota', 'Ohio',
          'Oklahoma', 'Oregon', 'Pennsylvania',
          'Rhode Island', 'South Carolina',
          'South Dakota', 'Tennessee', 'Texas',
          'Utah', 'Vermont', 'Virginia',
          'Washington', 'West Virginia', 'Wisconsin',
          'Wyoming']
      }
    },
    mounted () {
      this.list = this.states.map(item => {
        return {value: item, label: item}
      })
    },
    methods: {

    }
  }

</script>


<style scoped>
  .el-row {
    padding: 10px;
  }
</style>
