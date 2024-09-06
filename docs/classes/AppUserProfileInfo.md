[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AppUserProfileInfo

# Class: AppUserProfileInfo

## Implements

- [`IAppUserProfileInfo`](../interfaces/IAppUserProfileInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppUserProfileInfo()

> **new AppUserProfileInfo**(`data`?): [`AppUserProfileInfo`](AppUserProfileInfo.md)

#### Parameters

• **data?**: [`IAppUserProfileInfo`](../interfaces/IAppUserProfileInfo.md)

#### Returns

[`AppUserProfileInfo`](AppUserProfileInfo.md)

#### Defined in

main.ts:190970

## Properties

### profile\_image\_url?

> `optional` **profile\_image\_url**: `string`

URL to the reviewer’s profile image

#### Implementation of

[`IAppUserProfileInfo`](../interfaces/IAppUserProfileInfo.md).[`profile_image_url`](../interfaces/IAppUserProfileInfo.md#profile_image_url)

#### Defined in

main.ts:190966

***

### profile\_name?

> `optional` **profile\_name**: `string`

profile name of the reviewer

#### Implementation of

[`IAppUserProfileInfo`](../interfaces/IAppUserProfileInfo.md).[`profile_name`](../interfaces/IAppUserProfileInfo.md#profile_name)

#### Defined in

main.ts:190964

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:190979

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:190997

***

### fromJS()

> `static` **fromJS**(`data`): [`AppUserProfileInfo`](AppUserProfileInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppUserProfileInfo`](AppUserProfileInfo.md)

#### Defined in

main.ts:190990
