**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / TrendsMapDataInfo

# Class: TrendsMapDataInfo

## Implements

- [`ITrendsMapDataInfo`](../interfaces/ITrendsMapDataInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new TrendsMapDataInfo(data)

> **new TrendsMapDataInfo**(`data`?): [`TrendsMapDataInfo`](TrendsMapDataInfo.md)

#### Parameters

• **data?**: [`ITrendsMapDataInfo`](../interfaces/ITrendsMapDataInfo.md)

#### Returns

[`TrendsMapDataInfo`](TrendsMapDataInfo.md)

#### Source

main.ts:124783

## Properties

### geo\_id?

> **`optional`** **geo\_id**: `string`

Google Trends location identifier
you can use this field for matching obtained results with location parameters specified in the request
example:
US-NY

#### Implementation of

[`ITrendsMapDataInfo`](../interfaces/ITrendsMapDataInfo.md).[`geo_id`](../interfaces/ITrendsMapDataInfo.md#geo_id)

#### Source

main.ts:124765

***

### geo\_name?

> **`optional`** **geo\_name**: `string`

Google Trends location name
you can use this field for matching obtained results with location parameters specified in the request

#### Implementation of

[`ITrendsMapDataInfo`](../interfaces/ITrendsMapDataInfo.md).[`geo_name`](../interfaces/ITrendsMapDataInfo.md#geo_name)

#### Source

main.ts:124768

***

### max\_value\_index?

> **`optional`** **max\_value\_index**: `number`

max value among comparable terms
represents the maximum value if you specified more than two keywords in a POST array
if you specified only one keyword, the value will be null

#### Implementation of

[`ITrendsMapDataInfo`](../interfaces/ITrendsMapDataInfo.md).[`max_value_index`](../interfaces/ITrendsMapDataInfo.md#max_value_index)

#### Source

main.ts:124779

***

### values?

> **`optional`** **values**: `any`[]

relative keyword popularity rate in a given location
represents the location-specific keyword popularity rate over the given time range
if you specify more than one keyword, the values will be averaged to the highest value across all specified keywords
a value of 100 is the peak popularity for the term
a value of 50 means that the term is half as popular
a value of 0 means there was not enough data for this term

#### Implementation of

[`ITrendsMapDataInfo`](../interfaces/ITrendsMapDataInfo.md).[`values`](../interfaces/ITrendsMapDataInfo.md#values)

#### Source

main.ts:124775

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:124792

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:124816

***

### fromJS()

> **`static`** **fromJS**(`data`): [`TrendsMapDataInfo`](TrendsMapDataInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`TrendsMapDataInfo`](TrendsMapDataInfo.md)

#### Source

main.ts:124809
