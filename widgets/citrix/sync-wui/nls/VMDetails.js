/*
Product: OpenXT
Project: Synchronizer Administration Web UI
Copyright© Citrix 2012
*/

define ({root: {
    // General
    NOT_INCLUDED: "Not Included",
    NOT_INCLUDED_VALUE: "[Not Included]",
    NONE_SET: "None Set",
    // Form
    CLOSE: "Close",
    DELETE: "Delete VM",
    SAVE: "Save",
    // Tabs
    GENERAL: "General",
    HARDWARE: "Hardware",
    NETWORKS: "Networks",
    DISKS: "Disks",
    ICON: "Icon",
    ADVANCED: "Advanced",
    CUSTOM: "Custom",
    // General Tab
    UUID_LABEL: "UUID:",
    NAME_LABEL: "Name:",
    TEMPLATE_LABEL: "Template Name:",
    NAME_VALERROR: "Name is required. It cannot exceed 60 characters and can contain letters, digits, spaces and some punctuation (including underscore, dash, brackets, period, apostrophe, and comma).",
    TYPE_LABEL: "Type:",
    SWITCHER_KEY_LABEL: "Switcher Key:",
    SWITCHER_KEY_MASK: "CTRL + {0}",
    AUTOBOOT_LABEL: "Autoboot:",
    AUTOBOOT_TOOLTIP: "Start this VM when the host starts.",
    POWER_BEHAVIOUR_LABEL: "VM Power Controls Host:",
    POWER_BEHAVIOUR_TOOLTIP: "When the VM shuts down, hibernates or sleeps, the host device will do the same.",
    POWER_BEHAVIOUR_ENABLED: "Power control affects VM and host",
    POWER_BEHAVIOUR_DISABLED: "Power control affects VM only",
    HIDDEN_UI_LABEL: "Hide VM from UI:",
    HIDDEN_SWITCHER_LABEL: "Hide VM from Switcher Bar:",
    COMMUNICATION_LABEL: "Seamless Application Support:",
    COMMUNICATION_TOOLTIP: "Controls virtual machine firewall settings so that seamless applications will work.",
    DESCRIPTION_LABEL: "Description:",
    DESCRIPTION_VALERROR: "Description should not exceed 200 characters and can contain letters, digits, whitespace and some punctuation (including underscore, dash, brackets, period, apostrophe, and comma).",
    // Hardware Tab
    MEMORY_LABEL: "Memory (MB):",
    CORES_LABEL: "Cores Per Socket:",
    VCPUS_LABEL: "vCPUs:",
    THREED_GFX_LABEL: "3D Graphics (experimental):",
    VIRTUAL_CD_LABEL: "Virtual CD:",
    TOOLS_CD: "XenClient Guest Tools",
    USB_GRAB_LABEL: "Auto-assign USB Devices:",
    USB_GRAB_TOOLTIP: "When you start this VM, any free USB devices will be assigned to it.",    
    MOUSE_LEFT_LABEL: "Seamless Mouse Left:",
    MOUSE_RIGHT_LABEL: "Seamless Mouse Right:",
    BOOT_PRIORITY_LABEL: "Boot Priority:",
    SHUTDOWN_PRIORITY_LABEL: "Shutdown Priority:",
    BOOT_ORDER_LABEL: "Boot Order:",
    BOOT_TITLE: "Add a boot option...",
    CD_DRIVE: "CD Drive",
    HARD_DRIVE: "Hard Drive",
    NETWORK: "Network",
    // Network Tab
    NETWORK_DAEMON: "Network",
    // Disks Tab
    DISK_NAME_TH: "Disk Name",
    DISK_PATH_TH: "File Path",
    DISK_TYPE_TH: "Disk Type",
    PERSISTENT_TH: "Persistent",
    PERSISTENT_TOOLTIP: "This setting indicates if changes to the data on the disk remain across VM boots.",
    ACTIONS: "Actions",
    ADD_DISK: "Add Disk",
    REMOVE_DISK: "Remove",
    NO_DISKS: "No virtual disks",
    SELECT_DISK_TITLE: "Select Disks",
    // Icon Tab
    ICON_OVERRIDE_HEADER: "To use a vm icon not listed enter the client filepath below",
    ICON_TEXT_LABEL: "VM Icon Path:",
    // Advanced Tab
    POLICY_TITLE: "Isolation Policies",
    HARDWARE_TITLE: "Hardware Compatibility",
    VIRTUAL_TITLE: "Virtual Compatibility",
    OTHER_TITLE: "Other",
    STUB_DOMAIN_LABEL: "Stub Domain:",
    MODIFY_VM_LABEL: "Modify VM Settings:",
    PRINT_SCREEN_LABEL: "Print Screen:",
    NETWORKING_WIRED_LABEL: "Wired Network Access:",
    NETWORKING_WIRELESS_LABEL: "Wireless Network Access:",
    CD_ACCESS_LABEL: "CD Reading:",
    CD_RECORDING_LABEL: "CD Writing:",
    AUDIO_ACCESS_LABEL: "Audio Playback:",
    AUDIO_RECORDING_LABEL: "Audio Recording:",
    USB_ENABLED_LABEL: "USB Enabled:",
    USB_CONTROL_LABEL: "USB Control:",
    ACPI_PT_LABEL: "Allow OEM Windows Install:",
    ACPI_PT_TOOLTIP: "Expose the host ACPI SLIC table to the VM to unlock OEM editions of Windows.",
    SMBIOS_PT_LABEL: "Expose Physical Hardware Information:",
    SMBIOS_PT_TOOLTIP: "Expose the SMBIOS record types describing host hardware to the VM instead of those supplied by XenClient.",
    OEM_ACPI_PT_LABEL: "Expose Physical OEM Hardware:",
    OEM_ACPI_PT_TOOLTIP: "Expose the OEM hardware directly to the VM. Only one VM can have this enabled.",
    AMT_PT_LABEL: "Intel AMT Passthrough:",
    AMT_PT_TOOLTIP: "Enabling the Intel Active Management Technology (AMT) Management Engine (ME) provides hardware-based network management that allows out-of-band access to XenClient devices for administration purposes. Only one VM can have this enabled.",
    APIC_LABEL: "APIC",
    VIRIDIAN_LABEL: "Emulate Microsoft Hyper-V:",
    HVM_LABEL: "Hardware Virtual Machine",
    HVM_EXTRA_LABEL: "HVM Extra:",
    XENVM_EXTRA_LABEL: "XenVM Extra:",
    COMMAND_LINE_LABEL: "Command Line:",
    KERNEL_LABEL: "Kernel Path:",
    KERNEL_EXTRACT_LABEL: "Kernel Extraction Path:",
    INIT_RD_LABEL: "Initial Ramdisk:",
    INIT_RD_EXTRACT_LABEL: "Initial Ramdisk Extraction Path:",
    SOUND_LABEL: "Sound:",
    MEASURED_LABEL: "Measured:",
    TRACK_LABEL: "Track Dependencies:",
    S3_WAKE_LABEL: "Auto S3 Wake:",
    S3_MODE_LABEL: "S3 Mode:",
    // Custom Tab
    ADD_ACTION: "Add",
    DAEMON: "Daemon",
    PROPERTY: "Property",
    VALUE: "Value",
    REMOVE_ACTION: "Remove",
    NO_CUSTOM_FIELDS: "No custom fields defined"
}});
