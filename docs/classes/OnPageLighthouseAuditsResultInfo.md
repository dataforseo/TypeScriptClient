[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / OnPageLighthouseAuditsResultInfo

# Class: OnPageLighthouseAuditsResultInfo

## Implements

- [`IOnPageLighthouseAuditsResultInfo`](../interfaces/IOnPageLighthouseAuditsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageLighthouseAuditsResultInfo()

> **new OnPageLighthouseAuditsResultInfo**(`data`?): [`OnPageLighthouseAuditsResultInfo`](OnPageLighthouseAuditsResultInfo.md)

#### Parameters

• **data?**: [`IOnPageLighthouseAuditsResultInfo`](../interfaces/IOnPageLighthouseAuditsResultInfo.md)

#### Returns

[`OnPageLighthouseAuditsResultInfo`](OnPageLighthouseAuditsResultInfo.md)

#### Defined in

main.ts:163375

## Properties

### audits?

> `optional` **audits**: `string`[]

the list of available lighthouse audits
an array containing the titles of available audits
Note: the titles can change depending on if the audit passed or failed and may contain markdown code

#### Implementation of

[`IOnPageLighthouseAuditsResultInfo`](../interfaces/IOnPageLighthouseAuditsResultInfo.md).[`audits`](../interfaces/IOnPageLighthouseAuditsResultInfo.md#audits)

#### Defined in

main.ts:163371

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:163384

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:163405

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageLighthouseAuditsResultInfo`](OnPageLighthouseAuditsResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageLighthouseAuditsResultInfo`](OnPageLighthouseAuditsResultInfo.md)

#### Defined in

main.ts:163398
