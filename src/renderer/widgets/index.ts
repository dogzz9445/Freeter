/*
 * Copyright: (c) 2024, Alex Kaul
 * GNU General Public License v3.0 or later (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

import { WidgetSettings, WidgetType } from '@/widgets/types'
import note from './note';
import webpage from './webpage';

const widgetTypes = [
  note,
  webpage,
] as unknown as WidgetType<WidgetSettings>[];

export default widgetTypes;