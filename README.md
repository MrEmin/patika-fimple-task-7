# Custom-Button Component

Custom-Button is a versatile React component designed to create buttons with various styles and types based on different requirements.

## Installation

To install Custom-Button, you can use npm or yarn:

```bash
npm i ui-flexa
```

## Usage

Import the CustomButton component into your React application:

```javascript
import CustomButton from 'ui-flexa';
```

Then, use it within your components, providing the `type` prop to change the button style:

```javascript
<CustomButton type="primary">Primary Button</CustomButton>
<CustomButton type="default">Default Button</CustomButton>
<CustomButton type="dashed">Dashed Button</CustomButton>
<CustomButton type="text">Text Button</CustomButton>
<CustomButton type="link">Link Button</CustomButton>
```

### Props

| Prop  | Description                      | Type     | Default |
|-------|----------------------------------|----------|---------|
| type  | Specifies the button type        | string   | 'default'|

### Available Types

- `primary`
- `default`
- `dashed`
- `text`
- `link`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
