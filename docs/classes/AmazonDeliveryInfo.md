**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AmazonDeliveryInfo

# Class: AmazonDeliveryInfo

## Implements

- [`IAmazonDeliveryInfo`](../interfaces/IAmazonDeliveryInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AmazonDeliveryInfo(data)

> **new AmazonDeliveryInfo**(`data`?): [`AmazonDeliveryInfo`](AmazonDeliveryInfo.md)

#### Parameters

• **data?**: [`IAmazonDeliveryInfo`](../interfaces/IAmazonDeliveryInfo.md)

#### Returns

[`AmazonDeliveryInfo`](AmazonDeliveryInfo.md)

#### Source

main.ts:21970

## Properties

### delivery\_date\_from?

> **`optional`** **delivery\_date\_from**: `string`

the earliest date when the product can be shipped

#### Implementation of

[`IAmazonDeliveryInfo`](../interfaces/IAmazonDeliveryInfo.md).[`delivery_date_from`](../interfaces/IAmazonDeliveryInfo.md#delivery_date_from)

#### Source

main.ts:21956

***

### delivery\_date\_to?

> **`optional`** **delivery\_date\_to**: `string`

the latest date when the product can be delivered

#### Implementation of

[`IAmazonDeliveryInfo`](../interfaces/IAmazonDeliveryInfo.md).[`delivery_date_to`](../interfaces/IAmazonDeliveryInfo.md#delivery_date_to)

#### Source

main.ts:21958

***

### delivery\_message?

> **`optional`** **delivery\_message**: `string`

message accompanying the delivery information as posted by the seller

#### Implementation of

[`IAmazonDeliveryInfo`](../interfaces/IAmazonDeliveryInfo.md).[`delivery_message`](../interfaces/IAmazonDeliveryInfo.md#delivery_message)

#### Source

main.ts:21954

***

### delivery\_price?

> **`optional`** **delivery\_price**: [`PriceInfo`](PriceInfo.md)

price for the delivery
price of the delivery based on the location you specified in the POST request;
if free delivery is available, the value is null

#### Implementation of

[`IAmazonDeliveryInfo`](../interfaces/IAmazonDeliveryInfo.md).[`delivery_price`](../interfaces/IAmazonDeliveryInfo.md#delivery_price)

#### Source

main.ts:21966

***

### fastest\_delivery\_date\_from?

> **`optional`** **fastest\_delivery\_date\_from**: `string`

the earliest date when the product can be delivered with a fast delivery option

#### Implementation of

[`IAmazonDeliveryInfo`](../interfaces/IAmazonDeliveryInfo.md).[`fastest_delivery_date_from`](../interfaces/IAmazonDeliveryInfo.md#fastest_delivery_date_from)

#### Source

main.ts:21960

***

### fastest\_delivery\_date\_to?

> **`optional`** **fastest\_delivery\_date\_to**: `string`

the latest date when the product can be delivered with a fast delivery option

#### Implementation of

[`IAmazonDeliveryInfo`](../interfaces/IAmazonDeliveryInfo.md).[`fastest_delivery_date_to`](../interfaces/IAmazonDeliveryInfo.md#fastest_delivery_date_to)

#### Source

main.ts:21962

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:21979

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:22001

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AmazonDeliveryInfo`](AmazonDeliveryInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AmazonDeliveryInfo`](AmazonDeliveryInfo.md)

#### Source

main.ts:21994
