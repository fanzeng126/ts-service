const { BIGINT, DATE, BOOLEAN, STRING, DOUBLE } = require('@mctech/sequelize-impala')
export default [
  {
    name: 'concreteStatPeriod',
    fields: {
      orgId: { type: BIGINT, allowNull: false, primaryKey: true }, // 组织id
      id: { type: BIGINT, allowNull: false, primaryKey: true, defaultFn: 'id' }, // 主键id
      year: { type: BIGINT, allowNull: false }, // 统计周期年
      month: { type: BIGINT, allowNull: false }, // 统计周期月
      startDate: { type: DATE, allowNull: false }, // 开始时间
      endDate: { type: DATE, allowNull: false }, // 结束时间
      unit: { type: STRING, allowNull: false, defaultFn: 'm³' }, // 单位
      creator: { type: BIGINT, allowNull: false }, // 创建人
      createdAt: { type: DATE, allowNull: false, defaultFn: 'now' }, // 创建时间
      reviser: { type: BIGINT, allowNull: false }, // 修改人
      updatedAt: { type: DATE, allowNull: false, updateFn: 'now' }, // 修改时间
      version: { type: BIGINT, allowNull: false, updateFn: 'id' }, // 版本号
      isRemoved: { type: BOOLEAN, allowNull: false, defaultValue: false } // 是否删除
    }
  },
  {
    name: 'concreteStatMixerRatio',
    fields: {
      orgId: { type: BIGINT, allowNull: false, primaryKey: true }, // 组织id
      id: { type: BIGINT, allowNull: false, primaryKey: true, defaultFn: 'id' }, // 主键id
      concreteStatPeriodId: { type: BIGINT, allowNull: false }, // 统计周期id
      specModel: { type: STRING, allowNull: false }, // 标号
      slump: { type: STRING, allowNull: true }, // 塌落度（mm）
      concreteType: { type: STRING, allowNull: true }, // 混凝土种类
      cement: { type: DOUBLE, allowNull: true }, // 水泥（kg）
      flyAsh: { type: DOUBLE, allowNull: true }, // 粉煤灰
      coarseAggregateLevel1: { type: DOUBLE, allowNull: true }, // 粗集料5-10mm
      coarseAggregateLevel2: { type: DOUBLE, allowNull: true }, // 粗集料10-20mm
      coarseAggregateLevel3: { type: DOUBLE, allowNull: true }, // 粗集料16-31.5mm
      fineAggregate: { type: DOUBLE, allowNull: true }, // 细集料0-5mm
      waterReducer: { type: DOUBLE, allowNull: true }, // 减水剂
      remark: { type: STRING, allowNull: true }, // 备注
      creator: { type: BIGINT, allowNull: false }, // 创建人
      createdAt: { type: DATE, allowNull: false, defaultFn: 'now' }, // 创建时间
      reviser: { type: BIGINT, allowNull: false }, // 修改人
      updatedAt: { type: DATE, allowNull: false, updateFn: 'now' }, // 修改时间
      version: { type: BIGINT, allowNull: false, updateFn: 'id' }, // 版本号
      isRemoved: { type: BOOLEAN, allowNull: false, defaultValue: false } // 是否删除
    }
  },
  {
    name: 'concreteMaterialAnalyse',
    fields: {
      orgId: { type: BIGINT, allowNull: false, primaryKey: true }, // 组织id
      id: { type: BIGINT, allowNull: false, primaryKey: true, defaultFn: 'id' }, // 主键id
      concreteStatPeriodId: { type: BIGINT, allowNull: false }, // 统计周期id
      materialName: { type: STRING, allowNull: false }, // 材料名称
      materialSpecModel: { type: STRING, allowNull: true }, // 规格型号
      periodDesignQuantity: { type: DOUBLE, allowNull: true }, // 本期设计量
      periodCheckActualQuantity: { type: DOUBLE, allowNull: true }, // 本期盘点实耗量
      periodProduceActualQuantity: { type: DOUBLE, allowNull: true }, // 本期机楼实耗量
      yearDesignQuantity: { type: DOUBLE, allowNull: true }, // 本年设计量
      yearCheckActualQuantity: { type: DOUBLE, allowNull: true }, // 本年盘点实耗量
      yearProduceActualQuantity: { type: DOUBLE, allowNull: true }, // 本年机楼实耗量
      totalDesignQuantity: { type: DOUBLE, allowNull: true }, // 开累设计量
      totalCheckActualQuantity: { type: DOUBLE, allowNull: true }, // 开累盘点实耗量
      totalProduceActualQuantity: { type: DOUBLE, allowNull: true }, // 开累机楼实耗量
      remark: { type: STRING, allowNull: true }, // 备注
      creator: { type: BIGINT, allowNull: false }, // 创建人
      createdAt: { type: DATE, allowNull: false, defaultFn: 'now' }, // 创建时间
      reviser: { type: BIGINT, allowNull: false }, // 修改人
      updatedAt: { type: DATE, allowNull: false, updateFn: 'now' }, // 修改时间
      version: { type: BIGINT, allowNull: false, updateFn: 'id' }, // 版本号
      isRemoved: { type: BOOLEAN, allowNull: false, defaultValue: false } // 是否删除
    }
  }
]
